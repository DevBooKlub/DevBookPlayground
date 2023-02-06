import React, { useState } from "react";
import "./Layout.scss";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import SignInPage from "../SignInPage/SignInPage";
import LeftSection from "../Main/LeftSection/LeftSection";
import RightSection from "../Main/RightSection/RightSection";
import { Outlet } from "react-router";
import "../../_reset.scss";
import "../../variables/variables.scss";

function Layout() {
  const [theme, setTheme] = useState("dark");

  return (
    <div className={theme}>
      <div className="main background box-shadow">
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="main-layout-container">
          <LeftSection theme={theme} setTheme={setTheme} />
          <Outlet context={[theme]} />
          <RightSection theme={theme} setTheme={setTheme} />
        </div>
        {/* <SignInPage/> */}
      </div>
    </div>
  );
}

export default Layout;
