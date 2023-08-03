import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBuilding,
  faCartShopping,
  faHouse,
  faLeaf,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserContext from "../utils/userContext";
import {useSelector} from "react-redux";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {userName} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);


  const onlineStatus = useOnlineStatus();
  // console.log(isLoggedIn);
  return (
    <div className="flex justify-between items-center shadow-md px-40 py-6">
      <div className=" p-1  border-2 border-blue-800 ">
        <Link to="/" className="links">
          <h1 className="font-extrabold text-4xl text-blue-800">REZO</h1>
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex justify-around gap-16 font-medium text-lg text-gray-600">
          <Link to="/" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faHouse} />
            <li>HOME</li>
          </Link>
          <Link to="/about" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBuilding} />
            <li>ABOUT US</li>
          </Link>
          <Link to="/grocery" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLeaf} />
            <li>GROCERY</li>
          </Link>
          <div
            className={`flex items-center gap-2 ${
              !onlineStatus ? "text-red-700" : "text-green-700"
            }`}
          >
            <FontAwesomeIcon icon={faUser} />
            {/* condition ? expressionIfTrue : expressionIfFalse */}
            {isLoggedIn ? (
              <li onClick={() => setIsLoggedIn(false)}>
                SIGN OUT
                <span className="font-thin text-black">
                  ({userName?.name?.toUpperCase()})
                </span>
              </li>
            ) : (
              <li onClick={() => setIsLoggedIn(true)}>SIGN IN</li>
            )}
          </div>
          <Link to="/cart">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCartShopping} />
              <li className="bg-green-800 font-bold text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {cartItems.length}
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
