import React from 'react'
import "./Modal.scss"
import closeImg from "../../../assets/img/close.png"
import logoBlack from "../../../assets/img/logoBlack.png"

function Modal({setOpen}) {

    const closeModal = () => {
        setOpen(false);
      };

  return (
    <div className='modal'>
        <div className="modal-content">
            <img className='close-icon' src={closeImg} onClick={closeModal} alt="" />
            <img className='logo-img-modal' src={logoBlack} alt="" />
            <div className="modal-form-container">
                <h1 className='register-text'>Welcome to DevBook</h1>
                <form action="">
                {/* <label for="name"><b>Name</b> */}
                <input type="text" placeholder="Enter Name" name="name" id="name" />
                {/* <label for="email"><b>Email</b> */}
                <input type="text" placeholder="Enter Email" name="email" id="email" />
                {/* <label for="psw"><b>Password</b> */}
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>
                {/* <label for="psw-repeat"><b>Repeat Password</b> */}
                 <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
                 <p className='policy-text'>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
                <button type="submit" className="register-button">Register</button>
                </form>

                <div class="container-signin">
    <p className='sign-in-text'>Already have an account?  <a href="#">Sign in</a>.</p>
  </div>
            </div>
           
        </div>
    </div>
  )
}

export default Modal