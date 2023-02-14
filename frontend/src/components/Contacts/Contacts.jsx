import React, {useState} from "react";
import "./Contacts.scss";
import "./ContactComponent/ContactComponent";
import ContactComponent from "./ContactComponent/ContactComponent";
import userOneImg from "../../assets/img/userImg.jpg";
import userTwoImg from "../../assets/img/contactImg.jpg";
import Chat from "../Chat/Chat";

function Contacts({theme, setTheme}) {

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  

  return (
    <div className="contacts-container backgroundInner text box-shadow">
      <h3 className="card-title">Contacts</h3>
      <div className="border-line"></div>
      <div className="contacts-box">
      {open && <Chat open={open} setOpen={setOpen} closeModal={closeModal} theme={theme} />}
          <ContactComponent setOpen={setOpen} open={open} theme={theme} setTheme={setTheme}  />
        
      </div>
    </div>
  );
}

export default Contacts;
