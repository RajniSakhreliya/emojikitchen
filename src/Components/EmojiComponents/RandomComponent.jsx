import React from "react";
import "../../Styles/cooking.css";

const RandomComponent = ({ children, ...props }) => {
  return (
    <div className="randomComponent hover:bg-[#F1F3F4] mt-1" {...props}>
      {children}
    </div>
  );
};

export default RandomComponent;
