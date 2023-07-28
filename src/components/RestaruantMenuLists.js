import React, {useState} from "react";
import RestaruantCategoryList from "./RestaruantCategoryList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const RestaruantMenuLists = ({categoryData, showItems, setShowItems}) => {
 
  // console.log(categoryData);
  const handleShowItem = () => {
    setShowItems(!showItems)
  }
  return (
    <div className="my-5 shadow-md bg-white">
      <div
        className="flex justify-between  p-3"
        onClick={handleShowItem}
      >
        <h1 className="font-bold text-xl text-gray-700">
          {categoryData.title} ({categoryData.itemCards.length})
        </h1>
        <button className="text-2xl  text-gray-700">{showItems ? <FontAwesomeIcon icon={faAngleUp}/> : <FontAwesomeIcon icon={faAngleDown}/>  }</button>
      </div>
      {showItems && (
        <div>
          {categoryData?.itemCards.map((categoryList) => (
            <RestaruantCategoryList
              key={categoryList?.card?.info?.id}
              itemLists={categoryList}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaruantMenuLists;
