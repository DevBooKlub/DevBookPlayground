import React, { useState } from "react";
import "./SendBtn.scss";
import sendImg from "../../assets/img/send.png";
import sendImgLight from "../../assets/img/sendLight.png";

function SendBtn({ theme, setTheme }) {
  return (
    <>
      <button className="btn text backgroundInner border">
        {" "}
        <img
          className="btn-icon"
          src={theme === "dark" ? sendImgLight : sendImg}
          alt=""
        />{" "}
        Send!
      </button>
    </>
  );
}

export default SendBtn;
