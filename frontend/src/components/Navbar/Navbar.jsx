import React from "react";
import "./Navbar.scss";
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

function Navbar({ theme, setTheme }) {
  return (
    <div className="header">
      <div className="nav-container ">
        <div className="logo-search-wrapper">
          <div className="logo-box">
            <img
              className="logo"
              src={theme === "dark" ? logoNavLight : logoNav}
              alt=""
            />
          </div>
          <div className="nav-searchbar-box">
            <input
              className="searchbar box-shadow "
              type="text"
              placeholder="Search.."
            />
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
                src={theme === "dark" ? notificationImgLight : notificationImg}
                alt=""
              />
            </li>

            <li>
              <img
                className="social-icons"
                src={theme === "dark" ? emailImgLight : emailImg}
                alt=""
              />
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
