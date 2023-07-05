import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="header" tabIndex="5">
    This is react zero to hero 🚀🚀
  </h1>
);

var xyw = 10;

const HeadingComponent = () => {
  return (
    <>
      <div>
        <Title/>
        <h1>This the HeadingComponent</h1>
      </div>
      <div>
        <h1>Boombang team</h1>
      </div>
      <>
      <h1>This is inside the React. Fragment</h1>
      </>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
