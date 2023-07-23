import {useState, useEffect} from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import NoRestaruent from "./NoRestaruent";
import {Link, useParams} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnlineStatus from "../Hooks/useOnlineStatus";

const Body = () => {
  const [showAllRest, setShowAllRest] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {resId} = useParams();

  const handleFilterTopRest = () => {
    const filteredList = filteredRestaurents.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurents(filteredList);
  };

  const ShowAllRestaruntsAfterFilter = () => {
    setFilteredRestaurents(showAllRest);
  };

  const handleSearch = () => {
    const searchData = filterData(searchText, showAllRest);
    setFilteredRestaurents(searchData);
  };

  useEffect(() => {
    getRestaurents();
  }, []);

  const getRestaurents = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.948304038172601&lng=76.31970673799515&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    // console.log(jsonData);
    setShowAllRest(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurents(jsonData?.data?.cards[2]?.data?.data?.cards);
  };

  // finding the app in online or offline by creating a custom hook
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>Looks like your are offline !! check your internet connection</h1>
    );
  }
  // not return component (Early return for shimmer effect loading )
  if (!showAllRest) return null;

  return (
    <div className="flex-col mx-48 mt-20">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center p-2 border-solid border-2 border-gray-200 rounded-lg">
          <SearchBar
            handleSearch={handleSearch}
            handleSearchText={searchText}
            handleSetSearchText={setSearchText}
          />
        </div>

        <div className="flex justify-between gap-6 font-bold text-gray-500 ">
          <button
            className="hover:text-blue-800"
            onClick={() => ShowAllRestaruntsAfterFilter()}
          >
            SHOW ALL
          </button>
          <button
            className="hover:text-blue-800"
            onClick={() => {
              handleFilterTopRest();
            }}
          >
            TOP RATED
          </button>
        </div>
      </div>
      <hr />
      {showAllRest.length === 0 ? (
        <div className="flex flex-wrap gap-9 mt-8 mb-16 justify-start">
          <Shimmer />
        </div>
      ) : (
        filteredRestaurents.length > 0 && (
          <div className="flex flex-wrap justify-start gap-9 mt-8 mb-16 ">
            {filteredRestaurents.map((restaurants) => (
              <Link
                key={restaurants.data.id}
                to={"/restaruent/" + restaurants.data.id}
                className=""
              >
                <ResturantCard resData={restaurants} />
              </Link>
            ))}
          </div>
        )
      )}
      {filteredRestaurents.length === 0 && searchText !== "" && (
        <NoRestaruent />
      )}
    </div>
  );
};

export default Body;
