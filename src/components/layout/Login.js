import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            New to SMovie? <Link className="linkStyle_login" to="/register">Sign Up now.</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
