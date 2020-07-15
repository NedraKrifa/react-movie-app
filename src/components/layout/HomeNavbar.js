import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomeNavbar extends Component {
  render() {
    return (
      <div className="home_navbar">
        <Link className="linkStyle" to="/">
          <h1>SMovie</h1>
        </Link>
        <ul className="home_list">
          <Link className="linkStyle" to="/login">
            <li className="home_item">Sign In</li>
          </Link>
          <Link className="linkStyle" to="/register">
            <li className="home_item">Sign Up</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default HomeNavbar;
