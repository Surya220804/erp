import React from "react";
import "./Background.css";

const Background = ({ children }) => {
  return (
    <div className="background-container">
      <div className="gray-shape shape1"></div>
      <div className="gray-shape shape2"></div>
      <div className="gray-shape shape3"></div>
      <div className="gray-shape shape4"></div>
      <div className="contents">{children}</div>
    </div>
  );
};

export default Background;
