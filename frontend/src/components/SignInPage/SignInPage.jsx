import React, { useState } from "react";
import axios from 'axios';
import "./SignInPage.scss";
import SignUpLogoImg from "../../assets/img/logoSignUp.png";
import SignUpLogoImgBlack from "../../assets/img/logosmall.png"
import darkImg from "../../assets/img/darkImg.png";
import logowhite from "../../assets/img/logowhite.png"
import lightImg from "../../assets/img/lightImg.png";
import Modal from "./Modal/Modal";
import "../../_reset.scss";
import Login from "./Login/Login"
import wave from "../../assets/img/wave.svg"

function SignInPage() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
 


  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };


  

  return (
    <div className={theme}>
      <div className="background main-box">
        {/* <img className="wave" src={wave} alt="" /> */}

        {theme && (
          <img
            onClick={() => {
              setTheme(theme === "light" ? "dark" : "light");
            }}
            className="theme-btn"
            src={theme === "dark" ? lightImg : darkImg}
          />
        )}

        {open && <Modal open={open} setOpen={setOpen} closeModal={closeModal} />}
        <div className="sign-section-left">
          <div className="left-section-box">
            <img className="logo-img-xl" src={theme === "dark" ? logowhite : SignUpLogoImgBlack} alt="" />
            <div className="sign-text-container">
              <h2 className="text">
                Devbook helps you connect with other developers and share
                information and materials with them.
              </h2>
            </div>
          </div>
        </div>
        <div className="sign-section-right">
       <Login  open={open} setOpen={setOpen}/>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
