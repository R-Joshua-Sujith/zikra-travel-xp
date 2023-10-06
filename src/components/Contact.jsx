import React from "react";
import MainNav from "./MainNav";
import slidebar from "../assets/slidebar.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="main-contact-container" id="contact">
      <MainNav color="white" />
      <div className="contactContainer">
        <div className="contactContainer-one">
          <h3>CONTACT US</h3>
          <p>Fill the form to share your thoughts</p>
        </div>
        <div className="contactContainer-two">
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Email or Phone" />
          <input type="textarea" placeholder="Share your thoughts" />
          <div className="form-verify">
            <p>I agree the term of service</p>
            <button>SEND</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
