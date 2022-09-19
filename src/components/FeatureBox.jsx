import React from "react";
import "./FeatureBox.css";
import img2 from "./../image/2.png";
import img2a from "./../image/2a.png";
import img2b from "./../image/2b.png";

const FeatureBox = () => {
  return (
    <div className="featureBox">
      <div className="featureBox__container">
        <div className="featureBox__containerLeft">
          <h1>Get noise free sound everytime</h1>
          <p>
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build a
            page without coding.
          </p>

          <div className="bulletPoint__container one">
            <img src={img2a} alt="" />
            <div className="bulletPoint">
              <p className="p1">50+ Unique Design Blocks</p>
              <p className="p2">with Carefully Coded</p>
            </div>
          </div>
          <div className="bulletPoint__container">
            <img src={img2b} alt="" className="img2b" />
            <div className="bulletPoint">
              <p className="p1">Mobile First Design</p>
              <p className="p2">on Every Devices</p>
            </div>
          </div>
        </div>
        <div className="featureBox__containerRight">
          <img src={img2} />
        </div>
      </div>
    </div>
  );
};

export default FeatureBox;
