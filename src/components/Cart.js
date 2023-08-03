import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import CartFoodItem from "./CartFoodItem";
import {useDispatch, useSelector} from "react-redux";
import {faRemove} from "@fortawesome/free-solid-svg-icons";
import CartAddressPayment from "./CartComponents/CartAddressPayment";
import CartOrderHeader from "./CartComponents/CartOrderHeader";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  const totalPrices = cartItems.reduce((acc, item) => {
    return acc + item.card.info.price / 100
  },0)

  return (
    <>
    {cartItems.length === 0 ? <h1>No item</h1> :<div className="py-12 flex px-60 bg-slate-100">
      <CartAddressPayment/>
      <div className="w-6/12 mx-auto  bg-white px-6 py-4 flex flex-col gap-6">
        <CartOrderHeader cartItems={cartItems}/>
        {cartItems.map((items) => (
          <CartFoodItem key={items.card.info.id} item={items} />
        ))}
        <div></div>
        <div className="flex justify-between">
          <h1>Item Total</h1>
          <p>{totalPrices}</p>
        </div>
        <div>
          <div className="flex justify-between pb-3">
            <h1>Clear Cart</h1>
            <p className="border-2 px-2 text-slate-600">
              <FontAwesomeIcon onClick={handleClearCart} icon={faRemove} className="cursor-pointer"/>
            </p>
          </div>
          <hr />
          <div className="flex justify-between font-bold pt-3 cursor-pointer">
            <h1>TO PAY</h1>
            <h1>Rs {totalPrices}</h1>
          </div>
        </div>
      </div>
    </div>}
    
    </>
  );
};
export default Cart;
