import React, { useState } from "react";
import "./SendPost.scss";
import userImg from "../../assets/img/userImg.jpg";
import SendBtn from "../Buttons/SendBtn";
import AddPhotoBtn from "../Buttons/AddPhotoBtn";

function SendPost({ theme, setTheme }) {

const userSendImg = [

  {
    id:1,
    profilePic:[userImg]
  }
]



  return (
    <div className="sendPost-container backgroundInner box-shadow">
      <div className="user-img-container">
        {userSendImg.map(userPic => (
           <img src={userPic.profilePic} alt="" />
        ))}
       
      </div>
      <div className="type-post-wraper">
        <div className="input-box">
          <input
            className="searchbar"
            type="text"
            placeholder="Send your post..."
          />
        </div>
        <div className="button-box">
          <AddPhotoBtn theme={theme} setTheme={setTheme} />
          <SendBtn theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}

export default SendPost;
