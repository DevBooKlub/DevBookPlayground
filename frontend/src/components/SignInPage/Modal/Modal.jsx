import { useContext, useEffect, useState } from "react";
import "./Modal.scss";
import axios from "axios";
import logoBlack from "../../../assets/img/logosmall.png";
import logoModal from "../../../assets/img/logoXlBlack.svg";
import closeImg from "../../../assets/img/close.png";
import { AuthContext } from "../../../context/authContext";


function Modal({ setOpen }) {
 
  const closeModal = () => {
    setOpen(false);
  };



  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [userPic, setUserPic] = useState();
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const fileChange = (e) => {
    console.log(e.target.files);

    //! 2- target the files[0]
    setUserPic(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    console.log('test submit')
    e.preventDefault();

    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("email", user.email);
    formData.append("password", user.password);
    formData.append("confirm", user.confirm);
    formData.append("userPic", userPic);
    console.log(formData);
    try {
      //!3- used to specify the type of the formdata to be multipart
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const response = await axios.post("/api/register", formData, config);
      console.log(response.data);
      alert('Successfully Registered.')
      setOpen(false);
     
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <img
          className="close-icon"
          src={closeImg}
          onClick={closeModal}
          alt=""
        />
        <img className="logo-img-modal" src={logoBlack} alt="" />
        <div className="modal-form-container">
          <h1 className="register-text">Welcome to DevBook</h1>
          <form action="" method="post" onSubmit={handleSubmit}>
            {/* <label for="name"><b>Name</b> */}
            <input
              type="text"
              placeholder="Enter username"
              name="username"
              id="username"
              onChange={handleChange}
            />
            {/* <label for="email"><b>Email</b> */}
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              id="email"
              onChange={handleChange}
            />
            {/* <label for="psw"><b>Password</b> */}
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              id="password"
              onChange={handleChange}
            />
            {/* <label for="psw-repeat"><b>Repeat Password</b> */}
            <input
              type="password"
              placeholder="confirm Password"
              name="confirm"
              id="confirm"
              onChange={handleChange}
            />
            <input type="file" name="userPic" onChange={fileChange} />
            <p className="policy-text">
              By creating an account you agree to our{" "}
              <a href="#">Terms & Privacy</a>.
            </p>
            <button  type="submit" className="register-button buuton-TextInput">
              Register
            </button>
          </form>

          <div className="container-signin">
            <p onClick={closeModal} className="sign-in-text">
              Already have an account? <a href="#">Sign in</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
