import "./RestaruantMenuLists.css";
import {CDN_IMG_URL} from "../../utils/config"

const RestaruantMenuLists = ({itemCards}) => {
  return (
    <>
      {itemCards.map((itemCard, index) => {
        const {name, description, price, imageId} = itemCard?.card?.info;
        return (
          <div className="restaruantmenu-container" key={index}>
            <div className="name-price-desc">
              <div className="green-box">
                <div className="round-dot"></div>
              </div>
              <div className="name-price-desc-wrapper">
                <p className="item-name">{name}</p>
                <p className="item-price">₹ {price /100}</p>
                <span className="item-desc">{description}
                </span>
              </div>
            </div>
            <div className="img-button-container">
              <div className="img-container">
                <img
                  src={CDN_IMG_URL+imageId}
                  alt=""
                  className="item-image"
                />
                <button className="item-btn">ADD</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default RestaruantMenuLists;
