import React from "react";
import {CDN_IMG_URL} from "../utils/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../redux/cartSlice";

const CartFoodItem = ({item}) => {

  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(item.card.info.id))
  }
  const handleAddItem = () => {
    dispatch(addItem(item))
  }
  console.log("item", item);
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white  flex justify-between">
        <p className="w-40">{item.card.info.name}</p>
        <div className="flex gap-3 items-center px-2 border-2">
          <button onClick={handleRemoveItem}>-</button>
          <span>1</span>
          <button onClick={() => handleAddItem(item)}>+</button>
        </div>
        <button className="text-slate-600"><FontAwesomeIcon icon={faTrash} onClick={handleRemoveItem}/></button>
        <h1>₹ {item.card.info.price / 100}</h1>
      </div>
    </div>
  );
};

export default CartFoodItem;
