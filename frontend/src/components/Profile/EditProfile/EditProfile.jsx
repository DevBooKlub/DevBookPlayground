import React, { useState } from "react";
import "./editProfile.scss";

import axios from "axios";
import logoBlack from "../../../assets/img/logosmall.png";
import closeIcon from "../../../assets/img/close.png";

function EditProfile({ setOpen }) {
  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img
          className="close-icon"
          src={closeIcon}
          onClick={closeModal}
          alt=""
        />
        <img className="logo-img-modal" src={logoBlack} alt="" />
        <div className="modal-form-container">
          <h1 className="register-text">Edit your Profile</h1>
          <form action="" method="post">
            {/* <label for="name"><b>Name</b> */}
            <input
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            />
            {/* <label for="email"><b>Email</b> */}
            {/* <input type="text" placeholder="Enter Email" name="email" id="email" /> */}
            <input
              type="text"
              placeholder="Nickname"
              name="nickname"
              id="nickname"
            />
            {/* <label for="psw"><b>Password</b> */}
            <input
              type="text"
              placeholder="Quote/Bio"
              name="quote"
              id="quote"
            />
            {/* <label for="psw-repeat"><b>Repeat Password</b> */}
            {/* <input type="password" placeholder="confirm Password" name="confirm" id="confirm"  /> */}
            <label for="userPic"><p>User Profile Picture</p></label>
            <input
              type="file"
              placeholder="User Picture"
              name="userPic"
              id="userPic"
            />

        <label for="userBanner"><p>User Banner Picture</p></label>
            <input
              type="file"
              placeholder="User Banner"
              name="userBanner"
              id="userBanner"
            />

            <button type="submit" className="register-button backgroundInner">
              Save Changes
            </button>
          </form>

          {/* <div className="container-signin">
<p className='sign-in-text'>Already have an account?  <a href="#">Sign in</a>.</p>
</div> */}
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
