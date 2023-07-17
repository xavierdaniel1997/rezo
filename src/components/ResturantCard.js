import {CDN_IMG_URL} from "../utils/config"

  const ResturantCard = ({resData}) => {
    const {
      cloudinaryImageId,
      name,
      cuisines,
      costForTwo,
      avgRating,
      deliveryTime,
    } = resData?.data;
    return (
      <div className="resturant-card-container ">
        <div className="card-img-container">
          <img
            className="card-img"
            src={
              CDN_IMG_URL +
              cloudinaryImageId
            }
            alt=""
          />
        </div>
        <div className="res-detials">
          <h3 className="res-name">{name}</h3>
          <p className="res-cuisine">{cuisines.join(", ")}</p>
          <span className="cost">₹ {costForTwo / 100}</span>
          <div className="rating-distance">
            <span className="star-rating">⭐{avgRating}</span>
            <span className="distance">{deliveryTime} MINS</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default ResturantCard;