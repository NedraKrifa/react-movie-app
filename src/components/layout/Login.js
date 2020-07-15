import React, { Component } from "react";
import Avatar from "../../images/avatar.png";

class Login extends Component {
  render() {
    return (
      <div className="loginbox">
        <img src={Avatar} className="avatar" />
        <h1>Sign In</h1>
        <form>
          <label>Email address</label>
          <input type="email" placeholder="Enter email" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <button type="submit">Login</button>
          <p>
            New to SMovie? <a href="#">Sign Up now.</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
