import React from "react";
import "../styles/profileCard.scss";
import billGatesImage from "../assets/billgates.jpg";

const ProfileCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card-inner">
        <img src={billGatesImage} alt="Bill Gates" className="card-image" />
        <p className="card-text">Spend Bill Gates' Money</p>
      </div>
    </div>
  );
};

export default ProfileCard;
