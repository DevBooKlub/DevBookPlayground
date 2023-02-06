import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Profile.scss";

function UserProfileDetails() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="banner-container">
        <img className="banner-img" src={currentUser.banerImg} alt="" />
        <img
          className="profile-img border"
          src={currentUser.profilePic}
          alt=""
        />
      </div>
      <div className="user-details-container">
        <div className="user-name-conatiner">
          <h3 className="user-name text">{currentUser.name}</h3>
        </div>
        <div className="user-nickname-conatiner text">
          <h3 className="user-nickname text">{currentUser.nick}</h3>
        </div>
        <div className="user-quote-conatiner">
          <h3 className="user-quote text">{currentUser.quote}</h3>
        </div>
      </div>
    </>
  );
}

export default UserProfileDetails;
