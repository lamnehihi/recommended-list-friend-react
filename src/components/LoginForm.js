import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="go-back">
            <i class="fas fa-long-arrow-alt-left"></i>
            <span>
              <p>Go back</p>
            </span>
          </div>

          <img className="logo" src="https://www.coderx.co/img/logo-dark.png" />

          <div className="sign-up">
            <span>Sign up</span>
          </div>
        </div>

        <div className="form">
          <h1 className="title">Sign in</h1>

          <form>
            <div className="username">
              <label for="username">Username</label>
              <input type="text" id="username" name="username" value="Thanh Lam"/>
            </div>

            <div className="username">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" value="123123z"/>
            </div>

            <input type="submit" value="Sign In" className="submit-btn" />
          </form>

          <div className="keep-sign-in">
            <input type="checkbox" value="keep-sign-in" className="check-box" />
            <span>Keep me signed in</span>
          </div>

          <div className="forgot">
            <a href="#" className="userName">
              Forgot username?
            </a>
            <a href="#" className="password">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
