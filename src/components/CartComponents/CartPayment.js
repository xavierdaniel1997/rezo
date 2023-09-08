import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../../redux/cartSlice";

const CartPayment = ({totalPrice}) => {

  const cartItems = useSelector((store) => store.cart.items)

  const dispatch = useDispatch()
  const handleRemoveCartItems = () => {
    dispatch(clearCart())
  }
  return (
    <div className="w-4/12 mx-auto flex flex-col gap-4">
      <div className="">
        <div className="bg-white flex justify-between p-4 ">
          <h1 className="font-bold text-lg">TOTAL PRICE</h1>
          <h1 className="font-bold text-lg">₹ {totalPrice}</h1>
        </div>
        <div className="flex flex-col gap-1">
          <button className="border-2 border-black p-1 font-bold bg-white hover:bg-black hover:text-white" onClick={handleRemoveCartItems}>CLEAR CART</button>
          <button className="p-1 font-bold bg-black text-white hover:bg-white hover:text-black border-2 border-black">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default CartPayment;
