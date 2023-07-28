

import {useState, useEffect} from "react";
import ResturantCard, {withPromotedLabel} from "./ResturantCard";
import Shimmer from "./Shimmer";
import SearchBar from "./SearchBar";
import NoRestaruent from "./NoRestaruent";
import {Link, useParams} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import { RES_DATA_API } from "../utils/config";

const Body = () => {
  const [showAllRest, setShowAllRest] = useState([]);
  const [filteredRestaurents, setFilteredRestaurents] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(ResturantCard);

 
  const {resId} = useParams();

  const handleFilterTopRest = () => {
    const filteredList = filteredRestaurents.filter(
      (res) => res?.info?.avgRating > 4.2
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
    const data = await fetch(RES_DATA_API);
    const jsonData = await data.json();
    // console.log(jsonData);
    setShowAllRest(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurents(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // finding the app in online or offline by creating a custom hook
  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <div className="flex justify-center items-center py-20">
        <h1 className="text-4xl text-red-600">Looks like your are offline !! check your internet connection</h1>
      </div>
      
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
                key={restaurants?.info?.id}
                to={"/restaruent/" + restaurants?.info?.id}
                className=""
              > 
                {restaurants.info.promoted ? <RestaurantCardPromoted resData={restaurants?.info}/> : <ResturantCard resData={restaurants?.info} />}
     
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
