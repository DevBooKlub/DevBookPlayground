import React, { useContext, useState } from "react";
import "./Post.scss";
import likeImg from "../../../assets/img/like.png";
import likeImgLight from "../../../assets/img/likeLight.png";
import commentImg from "../../../assets/img/comment.png";
import commentImgLight from "../../../assets/img/commentLight.png";
import shareImg from "../../../assets/img/share.png";
import shareImgLight from "../../../assets/img/shareLight.png";
import Comments from "../../Comments/Comments";
import { AuthContext } from "../../../context/authContext";
import defaultUserPic from "../../../assets/img/pepeUserPic.jpg";
import addFriendLight from "../../../assets/img/addContact.png";
import addFriendDark from "../../../assets/img/addConntactLight.png";
import removeFriendDark from "../../../assets/img/removeContactLight.png";
import removeFriendLight from "../../../assets/img/removeContact.png";
import deletePostLight from "../../../assets/img/trashLight.png";
import deletePostDark from "../../../assets/img/trashDark.png";
import veryfiedIcon from "../../../assets/img/verified.png";

import moment from "moment";

import axios from "axios";
import { useNavigate } from "react-router-dom";

function Post({ id, post, theme, username, author, nickname }) {
  const navigate = useNavigate();



  const handleClick = () => {
    navigate('/profile/id')
  }



  const { state, dispatch } = useContext(AuthContext);

  const [isFriend, setIsFriend] = useState(true);

  const isMyFriend = (postAuthor, userFriends) => {
    console.log(postAuthor, userFriends);
    const isFriend = userFriends.find((friend) => friend._id === postAuthor);
    console.log("isFriend:", isFriend);
    return isFriend;
  };

  const handleAddRemoveFriend = async () => {
    
    //Cant add yourself to friend list

    if (state.currentUser._id === id) {
      return;
    }
    const friendsList = state.currentUser.friends.map((e) => e._id);
    const checkFriend = friendsList.find((friend) => friend === id);
    const friends = checkFriend
      ? friendsList.filter((friend) => friend !== id)
      : [...friendsList, id];
    console.log(friends);

    // if(friends === false){
    //   setIsFriend(true)
    // }else{
    //   setIsFriend(false)
    // }

    const newUser = await axios({
      method: "patch",
      url: `/api/users/${state.currentUser._id}`,
      headers: { "Content-Type": "application/json" },
      data: { friends },
    });
    const payload = newUser.data.data;
    dispatch({ type: "UPDATEUSER", payload });
  };

  const [commentOpen, setCommentOpen] = useState(false);

  const userPicURL = "http://localhost:5555" + post.userPic;
  const postPicURL = "http://localhost:5555" + post.picturePath;

  return (
    <div className="single-post-container backgroundInner box-shadow">
      <div className="single-post-wraper">
        <div className="user">
          <div className="userInfo">
            {post.userPic && (
              <img
                className="user-img borderImg"
                onClick={handleClick}
                src={userPicURL ? userPicURL : defaultUserPic}
                alt=""
              />
            )}
            <div className="details">
              { <div className="nickname-container"> <span className="nickname textPostNickname">{`${"@"}${"Nickname here"}`}</span> <img src={veryfiedIcon} alt="" /></div>}
              <div className="nameDate-container">
              <span className="user-name text ">{post.username}</span>
              <ul>
              <li className="post-date text textPostDate">
              
                {moment(post.createdAt).fromNow()}
              </li>
              </ul>
              </div>
            </div>
          </div>
          <div
            onClick={handleAddRemoveFriend}
            className="addFriend-icon-container "
          >
            {!isMyFriend(author, state.currentUser.friends) ? (
              <img
                src={theme === "dark" ? addFriendLight : addFriendDark}
                alt=""
              />
            ) : (
              <img
                src={theme === "dark" ? removeFriendLight : removeFriendDark}
                alt=""
              />
            )}
            {/* <img
              src={theme === 'dark' ? addFriendLight : addFriendDark}
              alt=''
            /> */}
          </div>
        </div>
        <div className="content">
          <p className="post-text text">{post.desc}</p>
          <img src={postPicURL} alt="" />
        </div>
        <div className="info-icons">
          <div className="item">
            <img src={theme === "dark" ? likeImgLight : likeImg} alt="" />
            <p className="text">Like</p>
          </div>
          <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
            <img src={theme === "dark" ? commentImgLight : commentImg} alt="" />
            <p className="text">Comment</p>
          </div>
          {/* <div className='item'>
            <img src={theme === 'dark' ? shareImgLight : shareImg} alt='' />
            <p className='text'>Share</p>
          </div> */}
          {state.currentUser._id === id ? (
            <div className="item">
              <img
                className={
                  state.currentUser._id === post.userId ? "visible" : "hidden"
                }
                src={theme === "dark" ? deletePostLight : deletePostDark}
                alt=""
              />{" "}
              <p className="text">Delete</p>
            </div>
          ) : null}
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}

export default Post;
