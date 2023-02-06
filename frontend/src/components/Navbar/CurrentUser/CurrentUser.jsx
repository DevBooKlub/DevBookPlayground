import React from "react";
import "./CurrentUser.scss";
import userImg from "../../../assets/img/userImg.jpg";
import CurrentUserComponent from "./CurrentUserComponent";

function CurrentUser() {
  const currentUser = [
    {
      id: 1,
      name: "Denis McArdle",
      profilePic: [userImg],
    },
  ];

  return (
    <div className="current-user-container box-shadow  backgroundInner">
      {currentUser.map((user) => (
        <CurrentUserComponent currentUser={user} key={currentUser.id} />
      ))}
    </div>
  );
}

export default CurrentUser;
