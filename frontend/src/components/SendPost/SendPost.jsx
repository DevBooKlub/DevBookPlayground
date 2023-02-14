import React, { useContext, useState } from "react";
import "./SendPost.scss";
import userImg from "../../assets/img/userImg.jpg";
import SendBtn from "../Buttons/SendBtn";
import AddPhotoBtn from "../Buttons/AddPhotoBtn";
import { AuthContext } from "../../context/authContext";
import axios from "axios";

function SendPost({ theme, setTheme }) {

  const { state } = useContext(AuthContext);

// const userSendImg = [

//   {
//     id:1,
//     profilePic:[userImg]
//   }
// ]

// {userSendImg.map(userPic => (
//   <img src={userPic.profilePic} alt="" />
// ))}

const [post, setPost] = useState({
  userId: "",
  // title: "",
      desc: "",
});
const [picturePath, setPicturePath] = useState();
const handleChange = (e) => {
      setPost({ ...post, [e.target.name]: e.target.value });
    };


const fileChange = (e) => {
  console.log(e.target.files);
  //! 2- target the files[0]
  setPicturePath(e.target.files[0]);
};



const handlerSubmit = async (e) => {
  e.preventDefault();
  const formData = new FormData();
    // formData.append("title", post.title);
      formData.append("desc", post.desc);
      formData.append("userId", post.userId);
      formData.append("picturePath", picturePath);
      console.log(formData);
      try {
        //!3- used to specify the type of the formdata to be multipart
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        };
  const response = await axios.post("api/posts/create", formData, config);
  console.log(response.data);
} catch (error) {
  console.log(error);
}
};



  return (
    <div className="sendPost-container backgroundInner box-shadow">
      <div className="user-img-container">
     <img src={state.currentUser.userPic} alt="" />
       
      </div>
      <div className="type-post-wraper">
        <div className="input-box">
          <input
            className="searchbar"
            name="desc"
            type="text"
            placeholder="Send your post..."
            onChange={handleChange}

          />
        </div>
        <div className="button-box">
          <AddPhotoBtn fileChange={fileChange} theme={theme} setTheme={setTheme} />
          <SendBtn handlerSubmit={handlerSubmit} theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </div>
  );
}

export default SendPost;
