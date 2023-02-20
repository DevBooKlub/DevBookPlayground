import React, { useContext } from "react";
import "./Comments.scss";
import userOneImg from "../../assets/img/userImg.jpg";
import userTwoImg from "../../assets/img/contactImg.jpg";
import sendImg from "../../assets/img/send.png";
import sendImgLight from "../../assets/img/sendLight.png";
import { AuthContext } from "../../context/authContext";

function Comments() {
  // const {currentUser} = useContext(AuthContext)
  const { state, dipatch } = useContext(AuthContext);

  // const comments = [
  //   {
  //     id: 1,
  //     name: "Denis McArdle",
  //     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
  //     userId: 1,
  //     profilePic: [userOneImg],
  //   },

  //   {
  //     id: 2,
  //     name: "Nigel Nix",
  //     desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
  //     userId: 2,
  //     profilePic: [userTwoImg],
  //   },
  // ];

  return (
    <div className="comments-container">
      <div className="write-comment-container">
        <img className="borderImg" src={userOneImg} alt="" />
        <input className="button-TextInput text" type="text" placeholder="Write comment" />
        <button className="text backgroundInner button-TextInput border">Send!</button>
      </div>
      
        <div className="comment">
          <img className="borderImg" src={state.currentUser.userPic} alt="" />
          <div className="user-info-comment">
            <span className="text">{state.currentUser.username}</span>
            <p className="text">{state.currentUser.username}</p>
          </div>
          <span className="date text">1 hour ago</span>
        </div>
     
    </div>
  );
}

export default Comments;
