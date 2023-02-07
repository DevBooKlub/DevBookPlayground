import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./Profile.scss";
import banerImgLight from "../../assets/img/banerLight.jpg"
import banerImgDark from "../../assets/img/banerDark.jpg"


// (<img src={theme === "dark" ? banerImgLight : banerImgDark} alt="" />)

function UserProfileDetails({theme, setTheme}) {
  const { state } = useContext(AuthContext);

  return (
    <>
      <div className="banner-container">
        {state.currentUser.userPic && <img className="banner-img" src={state.currentUser.userPic} alt=""/> }
        <img
          className="profile-img border"
          src={state.currentUser.userPic}
          alt=""
        />
      </div>
      <div className="user-details-container">
        <div className="user-name-conatiner">
          <h3 className="user-name text">{state.currentUser.username}</h3>
        </div>
        <div className="user-nickname-conatiner text">
          <h3 className="user-nickname text">{state.currentUser.username}</h3>
        </div>
        <div className="user-quote-conatiner">
          <h3 className="user-quote text">{state.currentUser.username}</h3>
        </div>
      </div>
    </>
  );
}

export default UserProfileDetails;
