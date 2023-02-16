import React, { useContext } from "react";
import "./ContactComponent.scss";
import contactImg from "../../../assets/img/contactImg.jpg";
import { AuthContext } from "../../../context/authContext";
import removeFriendDark from "../../../assets/img/removeDark.png";
import removeFriendLight from "../../../assets/img/removeLight.png";
import chatLight from "../../../assets/img/chatLight.png";
import chatDark from "../../../assets/img/chatDark.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ContactComponent({ theme, friend, setTheme, open, setOpen }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/profile/id");
  };

  const { state, dispatch } = useContext(AuthContext);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // const isMyFriend= (postAuthor, userFriends)=>{
  //   console.log(postAuthor, userFriends);
  //   const isFriend = userFriends.find(friend => friend._id === postAuthor);
  //   console.log('isFriend:', isFriend);
  //   return isFriend;
  // }


 
  const removeFriend = async()=>{
    //console.log(state.currentUser.friends)
    //console.log(friend)
    const friends = state.currentUser.friends.filter(frnd=> frnd._id !== friend._id);
    console.log('myFriends',friends)
    let newUser = await axios({
      method: 'patch',
      url: `/api/users/${state.currentUser._id}`,
      headers: { 'Content-Type': 'application/json' },
      data: { friends },
    })
    const payload = newUser.data.data;
    console.log('payload:', payload) 
    dispatch({ type: 'UPDATEUSER', payload })
  }

  return (
    <div className="contact-wrapper">
      <div onClick={handleClick} className="contactComponent-container">
        <>
          <img
            className="contact-img"
            src={"http://localhost:5555" + friend.userPic}
            alt=""
          />
          <h2 className="contact-name text">{friend.username}</h2>
        </>
      </div>
      <div className="contact-icons-container">
        <img
          onClick={true ? openModal : closeModal}
          src={theme === "dark" ? chatLight : chatDark}
          alt=""
        />
        <img
          onClick={removeFriend}
          className="removeFriend-icon"
          src={theme === "dark" ? removeFriendLight : removeFriendDark}
          alt=""
        />
      </div>
    </div>
  );
}

export default ContactComponent;
