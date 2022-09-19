import React from "react";
import "./HighLightBox.css";
import HighLightBoxButton from "./HighLightBoxButton";
import img2a from "./../image/2a.png";
import img2b from "./../image/2a.png";

const HighLightBox = () => {
  return (
    <div className="highLightBox">
      <div className="highLightBoxContainer">
        <h1>It’s everything you’ll ever need</h1>
        <div className="top">
          <HighLightBoxButton
            image={img2a}
            title={"50+ unique design blocks"}
          />
          <HighLightBoxButton image={img2b} title={"multiple layouts"} />
          <HighLightBoxButton image={img2b} title={"mobile first design"} />
        </div>
        <div className="center">
          <HighLightBoxButton image={img2b} title={"fully responsive"} />
          <HighLightBoxButton image={img2b} title={"bootstrap 4 framework"} />
        </div>
        <div className="bottom">
          <HighLightBoxButton image={img2b} title={"humanly support"} />
          <HighLightBoxButton image={img2b} title={"lifetime updates"} />
          <HighLightBoxButton image={img2b} title={"rich documentation"} />
        </div>
      </div>
    </div>
  );
};

export default HighLightBox;
