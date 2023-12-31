import React from "react";
import "./Shimmer.css";

const Shimmer = () => {
  return (
      <div className="shimmer">
        {Array(15)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card"></div>
          ))}
      </div>
  );
};

export default Shimmer;
