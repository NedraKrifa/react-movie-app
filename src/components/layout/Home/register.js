import React, { Component } from "react";
import Avatar from "../../../images/avatar.png";

class register extends Component {
  render() {
    return (
      <div className="loginbox loginbox_register">
        <img src={Avatar} className="avatar" alt="avatar" />
        <h1>Sign Up</h1>
        <form>
          <label>Email address</label>
          <input
            type="email"
            placeholder="Enter email"
            value={this.props.emailUser}
            required
            onChange={(e) => this.props.handleChangeEmail(e)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={this.props.passwordUser}
            required
            onChange={(e) => this.props.handleChangePassword(e)}
          />
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={this.props.confirmPasswordUser}
            required
            onChange={(e) => this.props.handleChangeConfirmPassword(e)}
          />
          <button type="submit" onClick={(e)=>this.props.checkRegister(e)}>Register</button>
        </form>
      </div>
    );
  }
}

export default register;
