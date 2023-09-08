import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {CDN_IMG_URL} from "../utils/config"
import { faStar } from "@fortawesome/free-solid-svg-icons";

  const ResturantCard = ({resData}) => {
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      costForTwoString,
      avgRating,
      deliveryTime,
      aggregatedDiscountInfoV3,
      area
    } = resData;
    return (
      <div data-testid="resCard" className="w-64 hover:scale-95 transition-transform">
        <div className="relative">
          <img
            className="rounded-2xl h-44 object-cover"
            src={
              CDN_IMG_URL +
              cloudinaryImageId
            }
            alt=""
          />
          <h1 className="absolute bottom-0 left-0 right-0 text-white font-extrabold text-2xl p-2  rounded-b-2xl">UPTO ₹{aggregatedDiscountInfoV3?.header}</h1>
        </div>
        <div className="px-2 pt-2">
          <h3 className="font-bold text-xl text-gray-700 overflow-hidden whitespace-nowrap w-56 md:w-auto">{name}</h3>
          <div className="pt-2 flex gap-2">
          <span className="bg-green-700 text-white text-xs p-1 rounded-full"><FontAwesomeIcon icon={faStar}/></span>
          <span>{avgRating}</span>
          </div>
          
          <p className="overflow-hidden whitespace-nowrap w-56 md:w-auto">{cuisines.join(", ")}</p>
          <div className="rating-distance">
            
            <span className="distance">{area}</span>
          </div>
        </div>
      </div>
    );
  };

  // Higher Order Component

  // input = RestaurantCard =>> output = RestaurantCardPromoted

  export const withPromotedLabel = (ResturantCard) => {

    return (props) => {
      return (
        <div>
          <label className="absolute z-10 font-bold bg-black text-white text-sm p-2 rounded-r-lg opacity-80 ">PROMOTED</label>
          <ResturantCard {...props}/>
        </div>
      )
    }

  }
  
  export default ResturantCard;

  