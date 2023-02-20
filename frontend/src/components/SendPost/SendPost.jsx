import React, { useContext, useState } from "react";
import "./SendPost.scss";
import userImg from "../../assets/img/userImg.jpg";
import SendBtn from "../Buttons/SendBtn";
import AddPhotoBtn from "../Buttons/AddPhotoBtn";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Picker from "emoji-picker-react";
import emojiIcon from "../../assets/img/emoji.png";
import { Theme } from "emoji-picker-react";
import { SuggestionMode } from "emoji-picker-react";

function SendPost({ theme, setTheme }) {
  const navigate = useNavigate();



  const handleClick = () => {
    navigate('/profile/id')
  }

  const { state, dispatch } = useContext(AuthContext);

  const [inputStr, setInputStr] = useState("");
  const [showPicker, setShowPicker] = useState(false);

  const [picturePath, setPicturePath] = useState();
  const [post, setPost] = useState({
    userId: "",
    desc: "",
  });

  const onEmojiClick = (event, emojiObject) => {
    setInputStr((prevInput) => prevInput + emojiObject.emoji);
    setShowPicker(false);
  };

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleEmoji = (e) => {
    setInputStr(e.target.value);
  };

  const doubleFunction = () => {
    handleEmoji();
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
      if (response.data._id) {
        console.log("res data new post exist");
        dispatch({ type: "ADDNEWPOST", payload: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sendPost-container backgroundInner box-shadow">
      <div className="user-img-container">
        <img
          className="borderImg box-shadow"
          src={state.currentUser.userPic}
          onClick={handleClick}
          alt=""
        />
      </div>

      <div className="type-post-wraper">
        <div className="input-box">
          <input
            className="searchbar box-shadow button-TextInput text"
            name="desc"
            type="text"
            placeholder="Send your post..."
            // value={inputStr}
            onChange={handleChange}
          />

          <img
            className="emoji-icon-btn"
            src={emojiIcon}
            onClick={() => setShowPicker((val) => !val)}
            alt=""
          />

          {showPicker && (
            <Picker 
            Theme="auto"
            pickerStyle={{ width: "40%", position: "absolute", right: "0", bottom:"-643%", background:"#f4f4f4" }}
            groupVisibility={{
              recently_used: false,
                
            }}
            disableSearchBar= {true}
            disableSkinTonePicker={true}
             onEmojiClick={onEmojiClick}
              />
          )}
        </div>

        <div className="button-box">
          <AddPhotoBtn
            fileChange={fileChange}
            theme={theme}
            setTheme={setTheme}
          />
          <SendBtn
            handlerSubmit={handlerSubmit}
            theme={theme}
            setTheme={setTheme}
          />
        </div>
      </div>
    </div>
  );
}

export default SendPost;
