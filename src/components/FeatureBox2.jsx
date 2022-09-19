import React from "react";
import "./FeatureBox2.css";
import img3 from "./../image/3.png";
import img4 from "./../image/4.png";

const FeatureBox2 = () => {
  return (
    <div className="featureBox2">
      <div className="featureBox2Container">
        <h1>Enjoy your music</h1>
        <p>
          Create custom landing pages with Omega that converts more visitors
          than any website. With lots of unique blocks, you can easily build a
          page without coding.
        </p>
        <div className="featureBox2Container__img">
          <img src={img3} alt="" className="img1" />
          <img src={img4} alt="" className="img2" />
        </div>
      </div>
    </div>
  );
};

export default FeatureBox2;
