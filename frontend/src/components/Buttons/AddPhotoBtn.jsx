import React, { useState } from "react";
import "./SendBtn.scss";
import addPhotoIcon from "../../assets/img/addPhoto.png";
import addPhotoIconLight from "../../assets/img/addPhotoLight.png";

function AddPhotoBtn({ theme, setTheme }) {
  return (
    <>
      <button type="file" className="btn text backgroundInner border">
        <img
          className="btn-icon"
          src={theme === "dark" ? addPhotoIconLight : addPhotoIcon}
          alt=""
        />
        Photo!
      </button>
    </>
  );
}

export default AddPhotoBtn;
