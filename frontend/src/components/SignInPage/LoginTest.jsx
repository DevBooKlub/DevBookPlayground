import React from 'react'
// import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./SignInPage.scss";
import "../../_reset.scss";

function Login() {
    // const [msg, setMsg] = useState("Sign In ");
    // const navigate = useNavigate();
  
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
        <div className="sign-section-right">
          <div className="sign-form-box backgroundInner ">
            <form className="form" action="" onSubmit={handleSubmit}>
              <input
                className="border "
                type="text"
                placeholder="Login"
                id="login"
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
        </div>

    )
}



export default Login