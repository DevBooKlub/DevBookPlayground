import React, { useState, useContext, useEffect } from "react";
import "./editProfile.scss";
import axios from "axios";
import logoBlack from "../../../assets/img/logosmall.png";
import closeIcon from "../../../assets/img/close.png";
import { AuthContext } from "../../../context/authContext";

function EditProfile({ setOpen }) {
  const { state, dispatch } = useContext(AuthContext);
  console.log(state);
  const closeModal = () => {
    setOpen(false);
  };

  const [user, setUser] = useState({
    nickname: "",
    quote: "",
  });
  const [userBanner, setUserBanner] = useState();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const fileChange = (e) => {
    console.log(e.target.files);

    //! 2- target the files[0]
    setUserBanner(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", user.nickname);
    formData.append("quote", user.quote);
    formData.append("userBanner", userBanner);
    console.log(formData);
    try {
      //!3- used to specify the type of the formdata to be multipart
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          // "authorization":"Bearer "+JSON.parse(localStorage.getItem("user"))
        },
      };

      const response = await axios.patch(
        `/api/users/${state.currentUser._id}`,
        formData,
        config
      );
      dispatch({ type: "UPDATEUSER", payload: response.data.data });
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
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
          <form action="" method="post" onSubmit={handleSubmit}>
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
              onChange={handleChange}
            />
            {/* <label for="psw"><b>Password</b> */}
            <input
              type="text"
              placeholder="Quote/Bio"
              name="quote"
              id="quote"
              onChange={handleChange}
            />
            {/* <label for="psw-repeat"><b>Repeat Password</b> */}
            {/* <input type="password" placeholder="confirm Password" name="confirm" id="confirm"  /> */}
            <label for="userPic">
              <p>User Profile Picture</p>
            </label>
            <input
              type="file"
              placeholder="User Picture"
              name="userPic"
              id="userPic"
            />

            <label for="userBanner">
              <p>User Banner Picture</p>
            </label>
            <input
              type="file"
              placeholder="User Banner"
              name="userBanner"
              id="userBanner"
              onChange={fileChange}
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
