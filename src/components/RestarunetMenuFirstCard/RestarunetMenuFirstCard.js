import "./RestarunetMenuFirstCard.css";

const RestarunetMenuFirstCard = ({name, cuisines, areaName, sla, avgRatingString, totalRatingsString}) => {
  return (
    <div className="res-name-res-rating-container">
        <div className="res-name-wrapper">
          <h2 className="res-name">{name}</h2>
          <span className="res-name-items">{cuisines.join(", ")}</span>
          <span className="res-name-items">{areaName}, {sla.lastMileTravel} km 🔻</span>
        </div>
        <div className="rating-ranking">
          <div className="rating-ranking-wrapper">
            <span className="rating">⭐ {avgRatingString}</span>
            <span className="ranking">{totalRatingsString}</span>
          </div>
        </div>
      </div>
  )
}

export default RestarunetMenuFirstCard