import {useState} from "react";

const Title = () => {
  return (
    <div className="logo-container">
      <h1 className="logo">REZO</h1>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="nav-item">
          <li>HOME</li>
          <li>ABOUT US</li>
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
