import React, { useState } from "react";
import "./Post.scss";
import likeImg from "../../../assets/img/like.png";
import likeImgLight from "../../../assets/img/likeLight.png";
import commentImg from "../../../assets/img/comment.png";
import commentImgLight from "../../../assets/img/commentLight.png";
import shareImg from "../../../assets/img/share.png";
import shareImgLight from "../../../assets/img/shareLight.png";
import Comments from "../../Comments/Comments";

function Post({ post, theme }) {
  const [commentOpen, setCommentOpen] = useState(false);

  return (
    <div className="single-post-container backgroundInner box-shadow">
      <div className="single-post-wraper">
        <div className="user">
          <div className="userInfo">
           {post.profilePic && <img className="user-img" src={post.profilePic} alt="" />}
            <div className="details">
              <span className="user-name text">{post.name}</span>
              <span className="post-date text">2 min ago</span>
            </div>
          </div>
        </div>
        <div className="content">
          <p className="post-text text">{post.desc}</p>
          <img src={post.postPic} alt="" />
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
        </div>
        {commentOpen && <Comments />}
      </div>
    </div>
  );
}

export default Post;