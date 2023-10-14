import React from "react";
import MainNav from "./MainNav";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Contact.css";
const Contact = () => {
  return (
    <div
      id="contact-section-link"
      className="main-contact-container contact-section"
    >
      <div className="sub-nav">
        <MainNav color="white" />
      </div>

      <div className="contactContainer">
        <div className="contactContainer-one">
          <h3>CONTACT US</h3>
          <p>Fill the form to share your thoughts</p>
        </div>
        <div className="contactContainer-two">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email or Phone" />
          <textarea
            className="contact-textarea"
            type="textarea"
            placeholder="Share your thoughts"
          />
          <div className="form-verify">
            {/* <p>I agree the term of service</p> */}
            <button>SEND</button>
          </div>
          <div className="social">
            <YouTubeIcon className="social-icon" />
            <InstagramIcon className="social-icon" />
            <TwitterIcon className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
