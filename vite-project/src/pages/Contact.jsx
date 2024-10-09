import React from "react";
import "./Contact.css"; 
import Website from '../assets/back.jpg';

function Contact() {
  return (
    <div>
      <div className="contact" style={{backgroundImage: `url(${Website})`, height: '100vh', backgroundSize:'cover'}}>
      <form class="form">
        <p class="form-title">Sign in to your account</p>
        <div class="input-container">
          <input type="email" placeholder="Enter email" />
          <span></span>
        </div>
        <div class="input-container">
          <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit" class="submit">
          Sign up
        </button>

        <p class="signup-link">
          No account?
          <a href="">Sign up</a>
        </p>
      </form>
      </div>
     
    </div>
  );
}

export default Contact;
