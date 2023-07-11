import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ReactComponent as ArrowrightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onChange = (e) => {
    setEmail(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      sendPasswordResetEmail(auth, email);
      toast.success("email was sent");
    } catch (error) {
      toast.error("could not send reset email");
    }
  };
  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <Link to="/signin" className="forgotPasswordLink">
            Sign In
          </Link>
          <div className="signInBar">
            <div className="signInText">Send reset Link</div>
            <button className="signInButton">
              <ArrowrightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
            {/* </div> */}
          </div>
        </form>
      </main>
      <ToastContainer />
    </div>
  );
}

export default ForgotPassword;
