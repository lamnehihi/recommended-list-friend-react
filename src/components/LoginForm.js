import React, { Component } from "react";

class LoginForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="header">
          <div className="go-back"></div>

          <img className="logo" />

          <div className="sign-up"></div>
        </div>

        <div className="form">
          <h1 className="title">Sign in</h1>

          <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" />

            <label for="password">Password</label>
            <input type="password" id="password" name="password" />

            <input type="submit" value="Submit" className="submit-btn" />
          </form>

          <div className="keep-sign-in">
            <input type="checkbox" value="keep-sign-in" className="check-box" />
            <p>Keep me signed in</p>
          </div>
          
          <div className="forgot">
            <a href="#" className="userName">Forgot username?</a>
            <a href="#" className="password">Forgot password?</a>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
