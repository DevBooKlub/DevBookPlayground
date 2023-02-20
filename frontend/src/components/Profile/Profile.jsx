import React, { useState } from "react";
import "./Profile.scss";
import userImg from "../../assets/img/userImg.jpg";
import banerImg from "../../assets/img/baner.jpg";
import UserProfileDetails from "./UserProfileDetails";
import banerImgLight from "../../assets/img/banerLight.jpg"
import banerImgDark from "../../assets/img/banerDark.jpg"
import EditProfile from "./EditProfile/EditProfile";
import blop from "../../assets/img/blob.svg"

function Profile({theme, setTheme}) {

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
//  const {currentUser} = useContext(AuthContext);
  
  // const userData = [
  //   {
  //     id: 1,
  //     banerImg: [banerImg],
  //     profileImg: [userImg],
  //     name: "Denis mcArdle",
  //     nickname: "@Denis",
  //     quote: "Website without visitors is like a ship lost in the horizon.",
  //   },
  // ];


  // {userData.map((userDetails) => (
  //   <UserProfileDetails
  //     UserProfileDetails={userDetails}
  //     key={UserProfileDetails.id}
  //   />
  // ))}

  return (
    <div className="profile-container backgroundInner box-shadow">
      {/* <img className="blop" src={blop} alt="" /> */}
        <UserProfileDetails theme={theme} setTheme={setTheme}/>
        {open && <EditProfile open={open} setOpen={setOpen} closeModal={closeModal} />}
      <div className="border-line border"></div>
      <div className="button-profile-conatiner ">
        <button  onClick={openModal} className="text button-TextInput">Edit profile</button>
      </div>
    </div>
  );
}

export default Profile;
