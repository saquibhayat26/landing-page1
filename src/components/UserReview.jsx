import React from "react";
import "./UserReview.css";
import photo1 from "./../image/photo1.png";
import photo2 from "./../image/photo2.png";

const UserReview = () => {
  return (
    <div className="userReview">
      <div className="UserReviewContainer">
        <h1>What users say</h1>
        <p>
          Create custom landing pages with Omega that converts more visitors
          than any website.
        </p>
        <div className="userCommentsContainer">
          <div className="userComments user1">
            <p>
              OMG! I cannot believe that I have got a brand new landing page
              after getting Omega. It was super easy to edit and publish.
            </p>
            <div className="userDetails">
              <img src={photo1} alt="" />
              <div>
                <p>Jonathan Taylor</p>
                <span>CEO at Creativex</span>
              </div>
            </div>
          </div>
          <div className="userComments user2">
            <p>
              OMG! I cannot believe that I have got a brand new landing page
              after getting Omega. It was super easy to edit and publish.
            </p>
            <div className="userDetails">
              <img src={photo2} alt="" />
              <div>
                <p>Marie Stanley</p>
                <span>Digital Marketer, Writer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
