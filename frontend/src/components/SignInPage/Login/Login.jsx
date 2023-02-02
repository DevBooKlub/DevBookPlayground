import React, {useState} from 'react'
import "../SignInPage.scss";
import "../Modal/Modal.scss"
import Modal from "../Modal/Modal"
import axios from "axios";
// import { useNavigate } from "react-router-dom";



function Login({open, setOpen}) {
  
    const openModal = () => {
        setOpen(true);
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const formData = new FormData(event.target);
    
        const data = {
          email: formData.get("email"),
          password: formData.get("password"),
        };
        const config = {
          data,
        };
        axios.defaults.withCredentials = true;
        try {
          const response = await axios.post("/api/login", config);
          console.log(response.data);
          // setMsg(response.data.msg);
    
          // navigate("/home");
        } catch (error) {
          console.log(error);
        }
      };

  return (
    
    <div className="sign-form-box backgroundInner ">
      <form className="form" action=""  method="post" onSubmit={handleSubmit}>
        <input
          className="border "
          type="text"
          placeholder="Login"
          id="email"
          required={true} 
        />
        <input
          className="border "
          type="text"
          placeholder="Password"
          id="password"
          required={true}
        />
        <button
          className="button-sign-in border text"
          type="submit"
          id="button"
        >
          Sign In!
        </button>
      </form>

      <a href="#">
        <p className="text">Forgot your password?</p>
      </a>

      <div className="border-white border-line"></div>

      <button onClick={openModal} className="create-acc-btn border text">
        Create Account
      </button>
    </div>
 
  )
}

export default Login