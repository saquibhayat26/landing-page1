import React from "react";
import FeatureBox from "../components/FeatureBox";
import FeatureBox2 from "../components/FeatureBox2";
import FeatureBox3 from "../components/FeatureBox3";
import FeatureBox4 from "../components/FeatureBox4";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HighLightBox from "../components/HighLightBox";
import UserReview from "../components/UserReview";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Header />
        <FeatureBox />
        <HighLightBox />
        <FeatureBox2 />
        <FeatureBox3 />
        <UserReview />
        <FeatureBox4 />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
