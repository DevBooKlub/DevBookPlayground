import React from "react";
import "./Profile.scss";

function UserProfileDetails({ UserProfileDetails }) {
  return (
    <>
      <div className="banner-container">
        <img className="banner-img" src={UserProfileDetails.banerImg} alt="" />
        <img
          className="profile-img border"
          src={UserProfileDetails.profileImg}
          alt=""
        />
      </div>
      <div className="user-details-container">
        <div className="user-name-conatiner">
          <h3 className="user-name text">{UserProfileDetails.name}</h3>
        </div>
        <div className="user-nickname-conatiner text">
          <h3 className="user-nickname text">{UserProfileDetails.nickname}</h3>
        </div>
        <div className="user-quote-conatiner">
          <h3 className="user-quote text">{UserProfileDetails.quote}</h3>
        </div>
      </div>
    </>
  );
}

export default UserProfileDetails;
