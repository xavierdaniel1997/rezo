import React, {useState} from "react";
import {CDN_IMG_URL} from "../utils/config";

import {useDispatch, useSelector} from "react-redux"
import { addItem } from "../redux/cartSlice";
import { set } from "mongoose";

const RestaruantCategoryList = ({itemLists}) => {


  const dispatch = useDispatch()
  const cartItems = useSelector((store) => store.cart.items)
  console.log("additem", cartItems);

  const [isAddItem, setIsAddItem] = useState(false)

  const handleAddFoodItem = (itemLists) => {
    dispatch(addItem(itemLists))
  }


  return (
    <div className="flex justify-between gap-7 py-3 items-center border-b">
      <div className="p-5">
        <div className="w-4 h-4 border-2 border-green-800 relative">
          <div className="rounded-full w-2 h-2 bg-green-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
        <div className="flex flex-col justify-start gap-1 pt-1">
          <p className="font-semibold text-lg text-zinc-700">
            {itemLists?.card?.info?.name}
          </p>
          <p className="text-zinc-700">
            ₹ {itemLists?.card?.info?.price / 100}
          </p>
          <p className="text-xs text-gray-400">
            {itemLists?.card?.info?.description}
          </p>
        </div>
      </div>
      <div>
        <div className="w-36 flex flex-col justify-center items-center relative pr-4">
          <img
            src={CDN_IMG_URL + itemLists?.card?.info?.imageId}
            alt=""
            className="w-40 h-24 rounded-lg"
          />
          <button className="absolute top-[75] font-bold text-green-600 bg-slate-100 px-6 py-1 rounded-md hover:text-green-800 hover:bg-slate-300" onClick={() => handleAddFoodItem(itemLists)}>
           ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestaruantCategoryList;
