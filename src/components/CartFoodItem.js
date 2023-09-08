import React from "react";
import {CDN_IMG_URL} from "../utils/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem, removeItem, removeItemQuantity } from "../redux/cartSlice";


const CartFoodItem = ({item}) => {

  const dispatch = useDispatch();

  const handleRemoveItem = () => {
    dispatch(removeItem(item.card.info.id))
  }
  const handleRemoveQuantity = () => {
    dispatch(removeItemQuantity(item.card.info.id))
  }
  const handleAddItem = () => {
    dispatch(addItem(item))
  }
  
  const totalQuantityPrice = (item.count * item.card.info.price / 100);
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white flex justify-between items-center gap-3">
        <div>
          <img src={CDN_IMG_URL+item.card.info.imageId} alt="" className="w-24"/>
        </div>
        
        <p className="w-40">{item.card.info.name}</p>
        <div className="flex gap-3 items-center px-2 border-2">
          <button onClick={handleRemoveQuantity}>-</button>
          <span>{item.count}</span>
          <button onClick={() => handleAddItem(item)}>+</button>
        </div>
        <button className="border-2 px-2 text-slate-600 cursor-pointer"><FontAwesomeIcon icon={faRemove}
                onClick={handleRemoveItem}/></button>
        <h1>₹ {totalQuantityPrice}</h1>
      </div>
    </div>
  );
};

export default CartFoodItem;
