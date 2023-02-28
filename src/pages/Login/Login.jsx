import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { AppWrap } from "../../wrapper";

import "./Login.scss";

const Login = () => {
  return (
    <section>
      <div className="form-box">
        <div className="form-value">
          <form action="">
            <h2>Login</h2>
            <div className="inputbox">
              <input type="email" required />
              <label for="">Email</label>
            </div>
            <div className="inputbox">
              <input type="password" required />
              <label for="">Password</label>
            </div>
            <div className="forget">
              <label for=""><input type="checkbox" />Remember Me  <a href="#">Forget Password</a></label>

            </div>
            <button>Log in</button>
            <div className="register">
              <p>Don't have a account <a href="#">Register</a></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login