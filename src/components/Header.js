
import {useState} from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBuilding,
  faHouse,
  faLeaf,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className=" p-1  border-2 border-blue-800 ">
      <Link to="/" className="links">
        <h1 className="font-extrabold text-4xl text-blue-800">REZO</h1>
      </Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(isLoggedIn);
  return (
    <div className="flex justify-between items-center shadow-md px-40 py-6">
      <Title />
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
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} />
            {/* condition ? expressionIfTrue : expressionIfFalse */}
            {isLoggedIn ? (
              <li onClick={() => setIsLoggedIn(false)}>SIGN OUT</li>
            ) : (
              <li onClick={() => setIsLoggedIn(true)}>SIGN IN</li>
            )}
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBagShopping} />
            <li>CART</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
