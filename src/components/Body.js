import {useState, useEffect} from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import NoRestaruent from "./NoRestaruent";
import {Link, useParams} from "react-router-dom";

const Body = () => {
  const [showAllRest, setShowAllRest] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  const {resId} = useParams()

  const handleFilterTopRest = () => {
    const filteredList = filteredRestaurents.filter(
      (res) => res.data.avgRating > 4
    );
    setFilteredRestaurents(filteredList);
  };

  const ShowAllRestaruntsAfterFilter = () => {
    setFilteredRestaurents(showAllRest);
  };

  const filterData = (searchText, showAllRest) => {
    const filterData = showAllRest.filter((restaurent) =>
      restaurent?.data?.name?.toLowerCase().includes(searchText?.toLowerCase())
    );
    return filterData;
  };

  const handleSearch = () => {
    const searchData = filterData(searchText, showAllRest);
    setFilteredRestaurents(searchData);
  };

  // console.log("render");

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

  // not return component (Early return for shimmer effect loading )
  if (!showAllRest) return null;

  return (
    <div className="body">
      <div className="searh-and-filter-container">
        <div className="search-container">
          <SearchBar
            handleSearch={handleSearch}
            handleSearchText={searchText}
            handleSetSearchText={setSearchText}
          />
        </div>

        <div className="filter-container">
          <div className="all-resturents">
            <button
              className="filter-btn"
              onClick={() => ShowAllRestaruntsAfterFilter()}
            >
              SHOW ALL
            </button>
          </div>
          <div className="more-filter-tabs">
            <button
              className="filter-btn"
              onClick={() => {
                handleFilterTopRest();
              }}
            >
              TOP RATED
            </button>
          </div>
        </div>
      </div>
      <hr />
      {showAllRest.length === 0 ? (
        <div className="shimmer-loading-container">
          <Shimmer />
        </div>
      ) : (
        filteredRestaurents.length > 0 && (
          <div className="res-container">
            {filteredRestaurents.map((restaurants) => (
              <Link key={restaurants.data.id} to={"/restaruent/"+restaurants.data.id} className="links">
                <ResturantCard
                  resData={restaurants}
                />
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
