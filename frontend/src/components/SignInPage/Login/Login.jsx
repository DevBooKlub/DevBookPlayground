import React, {useState} from 'react'
import "../SignInPage.scss";
import "../Modal/Modal.scss"
import Modal from "../Modal/Modal"



function Login({open, setOpen}) {
  
    const openModal = () => {
        setOpen(true);
      };
  return (
    
    <div className="sign-form-box backgroundInner ">
      <form className="form" action="">
        <input
          className="border "
          type="text"
          placeholder="Login"
          id="login"
        />
        <input
          className="border "
          type="text"
          placeholder="Password"
          id="password"
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