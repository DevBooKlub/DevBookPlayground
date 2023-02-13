import React, { useState } from "react";
import "./SendBtn.scss";
import addPhotoIcon from "../../assets/img/addPhoto.png";
import addPhotoIconLight from "../../assets/img/addPhotoLight.png";

function AddPhotoBtn({ theme, setTheme, fileChange }) {
  return (
    <>
      <input onChange={fileChange} type="file" />
        {/* <img
          className="btn-icon"
          src={theme === "dark" ? addPhotoIconLight : addPhotoIcon}
          alt=""
        /> */}
        Photo!
      
    </>
  );
}

export default AddPhotoBtn;
