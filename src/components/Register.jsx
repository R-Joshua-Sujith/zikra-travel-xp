import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Register = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const initialValue = queryParams.get("value") === "true";
  const primaryColor = initialValue ? "FF0048" : "FFDE00";
  const navigate = useNavigate();
  const [registerOpenAnimation, setRegisterOpenAnimation] = useState(false);
  const [loginOpenAnimation, setLoginOpenAnimation] = useState(false);
  const [state, setState] = useState(initialValue);
  const [color, setColor] = useState(primaryColor);
  const changeStateToLogin = () => {
    setLoginOpenAnimation(true);
    setColor("FFDE00");
    setState(false);
    setTimeout(() => {
      setLoginOpenAnimation(false);
    }, 500);
  };
  const changeStateToRegister = () => {
    setRegisterOpenAnimation(true);
    setColor("FF0048");
    setState(true);
    setTimeout(() => {
      setRegisterOpenAnimation(false);
    }, 500);
  };
  return (
    <div className="registerContainer" style={{ backgroundColor: `#${color}` }}>
      <div className="main-sub-registerContainer-one">
        <div className="main-sub-registerContainer-one-two">
          <div>
            <h1>Live</h1>
            <h1>Laugh</h1>
            <h1>Love</h1>
            <h1>Explore</h1>
          </div>
          <div className="main-sub-registerContainer-one-menu">
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              Vlogs
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              Showcase
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
            >
              Explore
            </div>
          </div>
        </div>
      </div>
      <div
        className="main-sub-registerContainer-two"
        style={{ backgroundColor: `#${color}` }}
      >
        <HomeIcon
          className="home-icon"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="register-form">
          {state && (
            <h3
              className={`${
                registerOpenAnimation ? "register-open-animation" : ""
              }  `}
            >
              Create new account.
            </h3>
          )}
          {!state && (
            <h3
              className={`${loginOpenAnimation ? "login-open-animation" : ""}`}
            >
              Login Here
            </h3>
          )}
          {state && (
            <div
              className={`input-container ${
                registerOpenAnimation ? "register-open-animation" : ""
              }`}
            >
              <MailIcon className="input-container-icon" />
              <input type="text" placeholder="Email" />
            </div>
          )}

          <div className="input-container">
            <PersonIcon className="input-container-icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className="input-container">
            <KeyIcon className="input-container-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" />
            <p className="agreement">
              I agree to all statements with Terms of Use
            </p>
          </div>
          {state && <button>Sign Up Now</button>}
          {!state && <button>Login</button>}

          <p className="continue">Or continue with</p>
          <div className="sign-in-container">
            <GoogleIcon className="sign-in-icons" />
            <FacebookIcon className="sign-in-icons" />
          </div>
          {state && (
            <p className="already" onClick={changeStateToLogin}>
              Already a member ? <u>Login</u>
            </p>
          )}
          {!state && (
            <p className="already" onClick={changeStateToRegister}>
              Not a member ? <u>Sign Up</u>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
