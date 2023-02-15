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
import addFriendLight from "../../../assets/img/addUserLight.png";
import addFriendDark from "../../../assets/img/addUserDark.png";
import removeFriendDark from "../../../assets/img/deleteUserDark.png";
import removeFriendLight from "../../../assets/img/deleteUserLight.png";
import deletePostLight from "../../../assets/img/trashLight.png";
import deletePostDark from "../../../assets/img/trashDark.png";
import moment from "moment";



import axios from "axios";

function Post({id, post, theme, username }) {

  const {state, dispatch} = useContext(AuthContext)

 
   const handleAddRemoveFriend = async() => {
    
    //Cant add yourself to friend list
    if(state.currentUser._id === id){
      return
    }
//
    const checkFriend = state.currentUser.friends.find(friend => friend === id);
    const friends = checkFriend ? state.currentUser.friends.filter(friend => friend !== id) : [...state.currentUser.friends, id];
    const newUser = await axios({method : "patch", url: `/api/users/${state.currentUser._id}`, headers: {"Content-Type" : "application/json"}, data:{friends}} )
    const payload = newUser.data.data;
    dispatch({type: "UPDATEUSER", payload});
   }





   
   

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
                className="user-img"
                src={userPicURL ? userPicURL : defaultUserPic}
                alt=""
              />
            )}
            <div className="details">
              <span className="user-name text">{post.username}</span>
              <span className="post-date text">{moment(post.createdAt).fromNow()}</span>
            </div>
          </div>
          <div
           onClick={handleAddRemoveFriend}
           className="addFriend-icon-container">
            <img
             
              src={theme === "dark" ? addFriendLight : addFriendDark}
              alt=""
            />
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
          <div className="item">
            <img src={theme === "dark" ? shareImgLight : shareImg} alt="" />
            <p className="text">Share</p>
          </div>
          <div className="item">
            <img
              className={ state.currentUser._id === post.userId ? "visible" : "hidden"}
              
              src={theme === "dark" ? deletePostLight : deletePostDark}
              alt=""
            />
           
            <p className="text">Delete</p>
          </div>
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}

export default Post;
