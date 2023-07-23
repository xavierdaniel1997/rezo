import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const RestarunetMenuFirstCard = ({name, cuisines, areaName, sla, avgRatingString, totalRatingsString}) => {
  return (
    <div className="flex justify-between items-center pb-5">
        <div className="flex flex-col gap-2">
          <h2 className="font-bold text-2xl text-zinc-900">{name}</h2>
          <p className="text-sm text-gray-500">{cuisines.join(", ")}</p>
          <span className="text-sm text-gray-500">{areaName}, {sla.lastMileTravel} km 🔻</span>
        </div>
        
          <div className="h-20 flex flex-col justify-center items-center p-2 border rounded-md">
            <span className="text-green-700 font-bold  pb-2"><FontAwesomeIcon icon={faStar} className="text-green-700"/> {avgRatingString}</span>
            <p className="font-bold text-xs text-gray-500 border-t border-gray-400 pt-2">{totalRatingsString}</p>
          </div>
      
      </div>
  )
}

export default RestarunetMenuFirstCard