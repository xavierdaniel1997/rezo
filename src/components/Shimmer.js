import React from "react";

const numberOfShimmer = 8;
const Shimmer = () => {
  return (
    <>
      {Array(8).fill("").map((e, index) => (
        <div className="shimmer-card-container" key={index}>
          <div className="shimmer-effect shimmer-card">
            <div className="shimmer-card-content">
              <div className="shimmer-card-img" />
              <h2 className="shimmer-card-title"></h2>
              <p className="shimmer-card-description"></p>
              <div className="shimmer-card-bottem-description" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Shimmer;
