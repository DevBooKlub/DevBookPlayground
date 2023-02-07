import React, { useContext } from "react";
import "./ContactComponent.scss";
import contactImg from "../../../assets/img/contactImg.jpg";
import { AuthContext } from "../../../context/authContext";

function ContactComponent() {

  const {state} = useContext(AuthContext);

  return (
    <div className="contactComponent-container">
      <img className="contact-img" src={state.currentUser.userPic} alt="" />
      <h2 className="contact-name text">{state.currentUser.username}</h2>
    </div>
  );
}

export default ContactComponent;
