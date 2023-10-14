import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import GoogleIcon from "@mui/icons-material/Google";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import HomeIcon from "@mui/icons-material/Home";
import { useState, useEffect } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import jwt_decode from "jwt-decode";
import { LoginSocialFacebook } from "reactjs-social-login";
import { LoginSocialGoogle } from "reactjs-social-login";
import { useDispatch } from "react-redux";
import SmallLoader from "./SmallLoader";
const Register = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const initialValue = queryParams.get("value") === "true";
  const primaryColor = initialValue ? "FF0048" : "FFDE00";
  const navigate = useNavigate();
  const [regLoading, setRegLoading] = useState(false);
  const [logLoading, setLogLoading] = useState(false);
  const [googleLoading, setgoogleLoading] = useState(false);
  const [registerOpenAnimation, setRegisterOpenAnimation] = useState(false);
  const [loginOpenAnimation, setLoginOpenAnimation] = useState(false);
  const [state, setState] = useState(initialValue);
  const [color, setColor] = useState(primaryColor);
  const [user_name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const changeStateToLogin = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setLoginOpenAnimation(true);
    setColor("FFDE00");
    setState(false);
    setTimeout(() => {
      setLoginOpenAnimation(false);
    }, 500);
  };
  const changeStateToRegister = () => {
    setUserName("");
    setEmail("");
    setPassword("");
    setRegisterOpenAnimation(true);
    setColor("FF0048");
    setState(true);
    setTimeout(() => {
      setRegisterOpenAnimation(false);
    }, 500);
  };

  const register = async () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const namePattern = /^[A-Za-z]{5,}$/;
    const passwordPattern = /^(?=\S{8,}$).*/;
    const phonePattern = /^[0-9]{10}$/;
    if (user_name === "" || email === "" || password == "" || phone == "") {
      toast.warning("Please enter all the fields");
    } else if (!phonePattern.test(phone)) {
      toast.warning("Invalid Phone Number");
    } else if (!emailPattern.test(email)) {
      toast.warning("Invalid email format");
    } else if (!namePattern.test(user_name)) {
      toast.warning(
        "Name must have atleast 5 characters and No special characters allowed"
      );
    } else if (!passwordPattern.test(password)) {
      toast.warning(
        "Password must have atleast 8 characters and No empty spaces allowed"
      );
    } else {
      setRegLoading(true);
      await axios
        .post("http://localhost:5000/signup", {
          user_type: "normal",
          user_name,
          email,
          password,
          phone,
        })
        .then((res) => {
          setRegLoading(false);
          toast.success(res.data.message);
          setUserName("");
          setEmail("");
          setPassword("");
          setPhone("");
          setTimeout(() => {
            changeStateToLogin();
          }, 500);
        })
        .catch((err) => {
          setRegLoading(false);
          toast.error(err.response.data.message);
        });
    }
  };

  const login = async () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (email === "" || password === "") {
      toast.warning("Please enter all the fields");
    } else if (!emailPattern.test(email)) {
      toast.warning("Invalid email format");
    } else {
      setLogLoading(true);
      await axios
        .post("http://localhost:5000/login", {
          email,
          password,
        })
        .then((res) => {
          const type = "normal";
          setLogLoading(false);
          dispatch({
            type: "login",
            user_type: type,
            user_email: email,
          });
          navigate("/");
        })
        .catch((err) => {
          setLogLoading(false);
          toast.error(err.response.data.message);
        });
    }
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
              <PersonIcon className="input-container-icon" />
              <input
                type="text"
                placeholder="Name"
                value={user_name}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
          )}

          {state && (
            <div
              className={`input-container ${
                registerOpenAnimation ? "register-open-animation" : ""
              }`}
            >
              <LocalPhoneIcon className="input-container-icon" />
              <input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
              />
            </div>
          )}
          <div className={`input-container`}>
            <MailIcon className="input-container-icon" />
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="input-container">
            <KeyIcon className="input-container-icon" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="checkbox-container">
            <input type="checkbox" />
            <p className="agreement">
              I agree to all statements with Terms of Use
            </p>
          </div>
          {/* {
            state && Loading ? (<SmallLoader/>):(<button onClick={register}>Sign Up Now</button>)
          } */}
          {regLoading ? (
            <div className="regloader">
              <SmallLoader />
            </div>
          ) : (
            state && <button onClick={register}>Sign Up Now</button>
          )}

          {logLoading ? (
            <div className="regloader">
              <SmallLoader />
            </div>
          ) : (
            !state && <button onClick={login}>login</button>
          )}

          <p className="continue">Or continue with</p>
          <div className="sign-in-container">
            {googleLoading ? (
              <SmallLoader />
            ) : (
              <LoginSocialGoogle
                client_id="240358342454-e400ip7nmsl82iaabenjc5k6b8imiuje.apps.googleusercontent.com"
                onResolve={async (res) => {
                  setgoogleLoading(true);
                  try {
                    const response = await axios.post(
                      "http://localhost:5000/googleSignUp",
                      {
                        user_type: "google",
                        user_name: res.data.given_name,
                        email: res.data.email,
                      }
                    );
                    if (response.status === 400 || response.status === 201) {
                      setgoogleLoading(false);
                      dispatch({
                        type: "login",
                        user_type: "google",
                        user_email: res.data.email,
                      });
                      navigate("/");
                    }
                  } catch (err) {
                    if (err.response.status === 400) {
                      setgoogleLoading(false);
                      dispatch({
                        type: "login",
                        user_type: "google",
                        user_email: res.data.email,
                      });
                      navigate("/");
                    } else {
                      setgoogleLoading(false);
                      toast.error("Server Error");
                    }
                  }
                }}
                onReject={(err) => {
                  setgoogleLoading(false);
                  toast.error("Server Error");
                }}
              >
                <GoogleIcon className="sign-in-icons" />
              </LoginSocialGoogle>
            )}
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
      <div className="signInDiv"></div>
      <ToastContainer />
    </div>
  );
};

export default Register;
