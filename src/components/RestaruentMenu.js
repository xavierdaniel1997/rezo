import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {CDN_IMG_URL, MENU_API} from "../utils/config";

// import "./RestaruentMenu.css";

import Shimmer from "./Shimmer";
import RestarunetMenuFirstCard from "./RestarunetMenuFirstCard/RestarunetMenuFirstCard";
import RestaruantMenuOffer from "./RestaruantMenuOffer/RestaruantMenuOffer";
import SlidingButton from "./SlidingButton/SlidingButton";
import RestaruantMenuLists from "./RestaruantMenuLists/RestaruantMenuLists";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const RestaruentMenu = () => {

  // const [restaurantInfo, setRestaurantInfo] = useState(null);
  const {resId} = useParams();

  const restaurantInfo = useRestaurantMenu(resId);


  if (restaurantInfo === null) {
    return (
      <div className="mx-96 my-11 flex flex-wrap gap-9 mt-8 mb-16 justify-start">
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
    <div className="mx-96 my-11">
      <div className="border-dashed border-b">
      <RestarunetMenuFirstCard
        name={name}
        city={city}
        areaName={areaName}
        cuisines={cuisines}
        sla={sla}
        avgRatingString={avgRatingString}
        totalRatingsString={totalRatingsString}
      />
      </div>
      
      <div className="mt-3 flex gap-4">
        <div className="text-zinc-600"><FontAwesomeIcon icon={faClock}/> <span className="font-bold">{sla.maxDeliveryTime} MINS</span> </div>
        <div className="text-zinc-600"><FontAwesomeIcon icon={faIndianRupeeSign}/> <span className="font-bold">{costForTwoMessage}</span></div>
      </div>
      <div className="mt-4 mb-6 flex  gap-2 overflow-hidden">
        <RestaruantMenuOffer offers={offers} />
      </div>
      {/* <div className="slidingbtn-container">
        <h4>Veg Only</h4>
        <SlidingButton />
      </div> */}
      <hr />
      <div className="mt-8">
        <RestaruantMenuLists itemCards={itemCards} />
      </div>
    </div>
  );
};

export default RestaruentMenu;
