import {useState} from "react";
import {Link} from "react-router-dom";

const Title = () => {
  return (
    <div className="logo-container">
      <Link to="/" className="links">
        <h1 className="logo">REZO</h1>
      </Link>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // console.log(isLoggedIn);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="nav-item">
          <Link to="/" className="links">
            <li>HOME</li>
          </Link>
          <Link to="/about" className="links">
            <li>ABOUT US</li>
          </Link>
          {/* condition ? expressionIfTrue : expressionIfFalse */}
          {isLoggedIn ? (
            <li onClick={() => setIsLoggedIn(false)}>SIGN OUT</li>
          ) : (
            <li onClick={() => setIsLoggedIn(true)}>SIGN IN</li>
          )}

          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
