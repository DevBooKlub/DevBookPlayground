import React, { useContext } from "react";
import "./CurrentUser.scss";
import userImg from "../../../assets/img/userImg.jpg";
import CurrentUserComponent from "./CurrentUserComponent";
import { AuthContext } from "../../../context/authContext";

function CurrentUser() {

  // const {currentUser} = useContext(AuthContext);

  // const currentUser = [
  //   {
  //     id: 1,
  //     name: "Denis McArdle",
  //     profilePic: [userImg],
  //   },
  // ];

  return (
    <div className="current-user-container box-shadow button-TextInput borderCurrentUser backgroundInner">
      {/* {currentUser.map((user) => ( */}
        <CurrentUserComponent  />
      {/* ))} */}
    </div>
  );
}

export default CurrentUser;
