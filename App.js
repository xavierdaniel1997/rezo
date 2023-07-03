import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  {id: "title", key: "h1"},
  "Hello every one this is form React CDN"
);
const heading2 = React.createElement(
  "h2",
  {id: "title", key: "h2"},
  "This is heading @ 2"
);
const container = React.createElement("div", {id: "container"}, [
  heading,
  heading2,
]);
console.log(container);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
