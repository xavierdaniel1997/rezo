import React from "react";

const numberOfShimmer = 8;
const Shimmer = () => {
  return (
    <>
      {Array(8).fill("").map((e, index) => (
        <div className=" w-64 h-44 bg-gray-400 rounded-2xl animate-pulse" key={index}>
        </div>
      ))}
    </>
  );
};

export default Shimmer;
