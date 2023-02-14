import React from "react";
import "./RightSection.scss";
import Contacts from "../../Contacts/Contacts";
import Jokes from "../../Jokes/Jokes";

function RightSection({theme, setTheme}) {
  return (
    <div className="right-section-container">
      <Contacts theme={theme} setTheme={setTheme} />
      <Jokes />
    </div>
  );
}

export default RightSection;
