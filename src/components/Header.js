const Title = () => {
  return (
    <div className="logo-container">
      <h1 className="logo">LAZA</h1>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="nav-item">
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>SIGN IN</li>
          <li>CART</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
