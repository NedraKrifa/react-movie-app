import React, { Component } from "react";
import Avatar from "../../../images/avatar.png";

class register extends Component {
  render() {
    return (
      <div className="loginbox loginbox_register">
        <img src={Avatar} className="avatar" alt="avatar"/>
        <h1>Sign Up</h1>
        <form>
          <label>Email address</label>
          <input type="email" placeholder="Enter email" />
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <label>Confirm Password</label>
          <input type="password" placeholder="Enter password" />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default register;
