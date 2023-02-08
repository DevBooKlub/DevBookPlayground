import React, { useContext, useEffect, useState } from "react";
import "../SignInPage.scss";
import "../Modal/Modal.scss";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/authContext";

function Login({ open, setOpen }) {
  const { state, dispatch } = useContext(AuthContext);
  const { currentUser } = state;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentUser);
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const openModal = () => {
    setOpen(true);
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    // const config = {
    //   data,
    // };
    axios.defaults.withCredentials = true;
    try {
      const response = await axios.post("/api/login", data);
      console.log(response.data, "test");

      localStorage.setItem("currentUser", JSON.stringify(response.data.user));
      dispatch({ type: "SETCURRENTUSER", payload: response.data.user });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-form-box backgroundInner ">
      <form className="form" action="" method="post" onSubmit={handleSubmit}>
        <input
          className="border "
          type="text"
          placeholder="Login"
          id="email"
          name="email"
          required={true}
          onChange={handleChange}
        />
        <input
          className="border "
          type="text"
          placeholder="Password"
          id="password"
          name="password"
          required={true}
          onChange={handleChange}
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
  );
}

export default Login;
