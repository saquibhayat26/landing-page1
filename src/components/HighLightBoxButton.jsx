import React from "react";
import "./HighLightBoxButton.css";

const HighLightBoxButton = ({ image, title }) => {
  return (
    <div className="button">
      <img src={image} alt="" />
      <p>{title}</p>
    </div>
  );
};

export default HighLightBoxButton;
