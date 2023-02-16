import React, { useContext } from "react";
import "./Navbar.scss";
import { AuthContext } from "../../context/authContext";
import logoNav from "../../assets/img/logosmall.png";
import logoNavLight from "../../assets/img/logowhite.png";
import messageImg from "../../assets/img/messenger.png";
import homeImg from "../../assets/img/home.png";
import emailImg from "../../assets/img/email.png";
import notificationImg from "../../assets/img/notification.png";
import darkMode from "../../assets/img/darkImg.png";
import lightMode from "../../assets/img/lightImg.png";
import CurrentUser from "./CurrentUser/CurrentUser";
import UserImg from "../../assets/img/userImg.jpg";
import emailImgLight from "../../assets/img/emailLight.png";
import messageImgLight from "../../assets/img/messengerLight.png";
import notificationImgLight from "../../assets/img/notificationLight.png";
import { useNavigate } from "react-router-dom";
import logOutIcon from "../../assets/img/logout.png";
import axios from "axios";

const currentUser = {
  _id: "",
  username: "",
  email: "",
  userPic: "",
  nickname: "",
  quote: "",
  userBanner: "",
  friends: [],
  id: "",
  posts: [],
};

function Navbar({ theme, setTheme }) {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleClick = () => {
    navigate("/");
  };
  const handleLogout = async () => {
    try {
      const data = await axios.post("/api/logout");
      if (Number(data.status) === 204) {
        dispatch({ type: "SETCURRENTUSER", currentUser });
        localStorage.clear();
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="header">
      <div className="nav-container ">
        <div className="logo-search-wrapper">
          <div className="logo-box">
            <img
              className="logo"
              src={theme === "dark" ? logoNavLight : logoNav}
              alt=""
              onClick={handleClick}
            />
          </div>
          <div className="nav-searchbar-box">
            <input
              className="searchbar box-shadow "
              type="text"
              placeholder="Search.."
            />
            {/* <button onClick={handleLogout}>Log me out</button> */}
          </div>
        </div>

        <div className="nav-icons">
          <ul>
            <li>
              {theme && (
                <img
                  onClick={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                  className="social-icons"
                  src={theme === "dark" ? lightMode : darkMode}
                />
              )}
            </li>
            {/* <li>
              <img className="social-icons" src={homeImg} alt="" />
            </li> */}

            <li>
              <img
                className="social-icons"
                src={theme === "dark" ? emailImgLight : emailImg}
                alt=""
              />
            </li>
            <li>
              <img onClick={handleLogout} className="social-icons logout" src={logOutIcon} alt="" />
            </li>

            {/* <li>
              <img className="social-icons" src={theme === "dark" ? messageImgLight : messageImg} alt="" />
            </li> */}
            <CurrentUser />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
