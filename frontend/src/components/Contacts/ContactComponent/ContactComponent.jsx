import React, { useContext } from "react";
import "./ContactComponent.scss";
import contactImg from "../../../assets/img/contactImg.jpg";
import { AuthContext } from "../../../context/authContext";
import removeFriendDark from "../../../assets/img/removeDark.png";
import removeFriendLight from "../../../assets/img/removeLight.png";
import chatLight from "../../../assets/img/chatLight.png";
import chatDark from "../../../assets/img/chatDark.png";

function ContactComponent({theme, setTheme, open, setOpen}) {

  const {state} = useContext(AuthContext);


  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="contact-wrapper">
    <div className="contactComponent-container">
      <img className="contact-img" src={state.currentUser.userPic} alt="" />
      <h2 className="contact-name text">{state.currentUser.username}</h2>
     
    </div>
    <div className="contact-icons-container">
        <img onClick={openModal} src={theme === "dark" ? chatLight : chatDark} alt="" />
        {/* <img src={removeFriendLight} alt="" /> */}

      </div>
    </div>
  );
}

export default ContactComponent;
