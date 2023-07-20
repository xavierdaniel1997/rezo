import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CDN_IMG_URL, MENU_API} from "../utils/config";

import "./RestaruentMenu.css";

import Shimmer from "./Shimmer";
import RestarunetMenuFirstCard from "./RestarunetMenuFirstCard/RestarunetMenuFirstCard";
import RestaruantMenuOffer from "./RestaruantMenuOffer/RestaruantMenuOffer";
import SlidingButton from "./SlidingButton/SlidingButton";
import RestaruantMenuLists from "./RestaruantMenuLists/RestaruantMenuLists";

const RestaruentMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const {resId} = useParams();
  useEffect(() => {
    getRestaurantInfoData();
  }, []);

  const getRestaurantInfoData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    // console.log(json);
    setRestaurantInfo(json?.data);
  };

  if (restaurantInfo === null) {
    return (
      <div className="shimmer-loading-container res-menu-shimmer">
        <Shimmer />
      </div>
    );
  }

  // console.log(restaurant);
  const {
    name,
    city,
    areaName,
    cuisines,
    cloudinaryImageId,
    sla,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
  } = restaurantInfo?.cards[0]?.card?.card?.info;


  // const {cards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  const {itemCards} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card 
  // const {itemCards : itemCards2} = restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
  // console.log(itemCards);
  
  const {offers} =
    restaurantInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle;

  return (
    <div className="restaruant-container">
      <RestarunetMenuFirstCard
        name={name}
        city={city}
        areaName={areaName}
        cuisines={cuisines}
        sla={sla}
        avgRatingString={avgRatingString}
        totalRatingsString={totalRatingsString}
      />
      <div className="time-rate">
        <span>{sla.maxDeliveryTime} MINS</span>
        <span>{costForTwoMessage}</span>
      </div>
      <div className="restaruantMenuOffer-main-container">
        <RestaruantMenuOffer offers={offers} />
      </div>
      <div className="slidingbtn-container">
        <h4>Veg Only</h4>
        <SlidingButton />
      </div>
      <hr />
      <div className="restaruantMenuLists-container">
        <RestaruantMenuLists itemCards={itemCards} />
      </div>
    </div>
  );
};

export default RestaruentMenu;
