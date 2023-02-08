import React from "react";
import "./RightSection.scss";
import Contacts from "../../Contacts/Contacts";
// import Jokes from "../../Jokes/Jokes";

function RightSection() {
  return (
    <div className="right-section-container">
      <Contacts />
      {/* <Jokes /> */}
    </div>
  );
}

export default RightSection;
