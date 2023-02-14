import { createContext, useEffect, useReducer, useState } from "react";
import userImgOne from "../assets/img/userImg.jpg";
import banerImg from "../assets/img/baner.jpg";
import userImgTwo from "../assets/img/contactImg.jpg";
import { reducer } from "./reducer.js";
import CurrentUser from "../components/Navbar/CurrentUser/CurrentUser";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { currentUser: "", posts: [] });



  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


