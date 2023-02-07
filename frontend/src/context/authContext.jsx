import { createContext, useEffect, useReducer, useState } from "react";
import userImgOne from "../assets/img/userImg.jpg";
import banerImg from "../assets/img/baner.jpg";
import userImgTwo from "../assets/img/contactImg.jpg";
import { reducer } from "./reducer.js";
import CurrentUser from "../components/Navbar/CurrentUser/CurrentUser";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [state, dispatch]=useReducer(reducer, {currentUser: ''})

  

   
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem("user")) || null
  // );

  // const login = () => {
  //   //toDO

  //   {
  //     setCurrentUser(
  //       {id: 2,
  //         name: "Nigel Nix",
  //         profilePic: [userImgTwo],
  //         banerImg: [banerImg],
  //         quote: "Great web design without functionality is like a sports car with no engine",
  //         nick: "@Nigel"}
  //       );
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem("user", JSON.stringify(currentUser));
  // }, [currentUser]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

// {id: 2,
// name: "Nigel Nix",
// profilePic: [userImgTwo],
// banerImg: [banerImg],
// quote: "Great web design without functionality is like a sports car with no engine",
// nick: "@Nigel"}

// {id: 1,
// name: "Denis McArdle",
// profilePic: [userImgOne],
// banerImg: [banerImg],
// quote: "Website without visitors is like a ship lost in the horizon.",
// nick: "@Denis",}
