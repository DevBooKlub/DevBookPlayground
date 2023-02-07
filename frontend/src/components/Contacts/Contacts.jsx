import React from "react";
import "./Contacts.scss";
import "./ContactComponent/ContactComponent";
import ContactComponent from "./ContactComponent/ContactComponent";
import userOneImg from "../../assets/img/userImg.jpg";
import userTwoImg from "../../assets/img/contactImg.jpg";

function Contacts() {
  const contactComponent = [
    { id: 1, profilePic: [userOneImg], name: "Denis McArdle" },

    { id: 2, profilePic: [userTwoImg], name: "Nigel Nix" },

    { id: 3, profilePic: [userOneImg], name: "Iwo Kaczmarzyk" },

    { id: 4, profilePic: [userTwoImg], name: "Sunny Eyles" },
    { id: 5, profilePic: [userOneImg], name: "Slavy Spassov" },

    { id: 6, profilePic: [userTwoImg], name: "Lee Davis" },
    { id: 6, profilePic: [userTwoImg], name: "Lee Davis" },
    { id: 6, profilePic: [userTwoImg], name: "Lee Davis" },
  ];

  return (
    <div className="contacts-container backgroundInner text box-shadow">
      <h3 className="card-title">Contacts</h3>
      <div className="border-line"></div>
      <div className="contacts-box">
      
          <ContactComponent />
        
      </div>
    </div>
  );
}

export default Contacts;
