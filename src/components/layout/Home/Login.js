import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from "../../../images/avatar.png";

class Login extends Component {
  render() {
    return (
      <div className="loginbox">
        <img src={Avatar} className="avatar" alt="avatar" />
        <h1>Sign In</h1>
        <form>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={this.props.email}
            onChange={(e) => this.props.handleChangeEmailLogin(e)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={this.props.password}
            onChange={(e) => this.props.handleChangePasswordLogin(e)}
          />
          <button type="submit" onClick={(e) => this.props.checkLogin(e)}>
            Login
          </button>
          <p>
            New to SMovie?{" "}
            <Link className="linkStyle_login" to="/register">
              Sign Up now.
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
