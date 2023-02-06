import React from "react";
import "./ContactComponent.scss";
import contactImg from "../../../assets/img/contactImg.jpg";

function ContactComponent({ contactComponent }) {
  return (
    <div className="contactComponent-container">
      <img className="contact-img" src={contactComponent.profilePic} alt="" />
      <h2 className="contact-name text">{contactComponent.name}</h2>
    </div>
  );
}

export default ContactComponent;
