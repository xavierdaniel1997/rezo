import {useState} from "react";
import {restaurantData} from "../utils/data";
import ResturantCard from "./ResturantCard";



const Body = () => {
  // const [filterRest, setFilterRest] = useState(restaurantData);
  const [allRest, setAllRest] = useState(false);
  const [restaurents, setRestaurents] = useState(restaurantData);
  const [searchText, setSearchText] = useState("");

  const handleFilterTopRest = () => {
    const filteredList = restaurents.filter((res) => res.data.avgRating > 4);
    setRestaurents(filteredList);
    setAllRest(false);
  };

  const ShowAllRest = () => {
    setRestaurents(restaurantData);
    setAllRest(true);
  };

  function filterData(searchText, restaurents) {
    const filterData = restaurents.filter((restaurent) =>
      restaurent.data.name.toLowerCase().includes(searchText)
      
    );
    console.log("data" ,filterData);
    return filterData;  
  }

  return (
    <div className="body">
      <div className="searh-and-filter-container">
        <div className="search-container">
          <input
            className="search-box"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchData = filterData(searchText, restaurents);
              setRestaurents(searchData);
              console.log(searchData);
            }}
          >
            search
          </button>
        </div>

        <div className="filter-container">
          <div className="all-resturents">
            <button className="filter-btn" onClick={() => ShowAllRest()}>
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

      <div className="res-container">
        {restaurents.map((restaurants) => (
          <ResturantCard key={restaurants.data.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};

export default Body;
