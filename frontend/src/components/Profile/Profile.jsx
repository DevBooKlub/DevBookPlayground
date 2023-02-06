import React from "react";
import "./Profile.scss";
import userImg from "../../assets/img/userImg.jpg";
import banerImg from "../../assets/img/baner.jpg";
import UserProfileDetails from "./UserProfileDetails";

function Profile() {


  
  const userData = [
    {
      id: 1,
      banerImg: [banerImg],
      profileImg: [userImg],
      name: "Denis mcArdle",
      nickname: "@Denis",
      quote: "Website without visitors is like a ship lost in the horizon.",
    },
  ];

  return (
    <div className="profile-container backgroundInner box-shadow">
      {userData.map((userDetails) => (
        <UserProfileDetails
          UserProfileDetails={userDetails}
          key={UserProfileDetails.id}
        />
      ))}
      <div className="border-line border"></div>
      <div className="button-profile-conatiner ">
        <button className="text">Edit profile</button>
      </div>
    </div>
  );
}

export default Profile;
