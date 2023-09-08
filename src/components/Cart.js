import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CartFoodItem from "./CartFoodItem";
import {useDispatch, useSelector} from "react-redux";
import {faRemove} from "@fortawesome/free-solid-svg-icons";
import CartPayment from "./CartComponents/CartPayment";
import {clearCart} from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const totalPrices = cartItems.reduce((acc, item) => {
    return acc + item.count * (item.card.info.price / 100);
  }, 0);

  return (
    <>
      {cartItems.length === 0 ? (
        <h1>No item</h1>
      ) : (
        <div className="py-12 flex px-60 bg-slate-100">
          <div className="w-7/12 mx-auto  bg-white px-6 py-4 flex flex-col gap-6">
            {cartItems.map((items) => (
              <CartFoodItem key={items.card.info.id} item={items} />
            ))}
            <div>
              <hr />
              <div className="flex justify-between font-bold pt-3 cursor-pointer">
                <h1>ITEM TOTAL</h1>
                <h1>Rs {totalPrices}</h1>
              </div>
            </div>
          </div>
          
          <CartPayment totalPrice={totalPrices}/>
        </div>
      )}
    </>
  );
};
export default Cart;
