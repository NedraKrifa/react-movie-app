import React, { Component } from "react";

class HomeContact extends Component {
  render() {
    return (
        <footer>
          <ul className="footer-list">
            <li>
              <i className="fab fa-facebook-square"></i>
            </li>
            <li>
              <i className="fab fa-twitter-square"></i>
            </li>
            <li>
              <i className="fab fa-instagram-square"></i>
            </li>
            <li>
              <i className="fab fa-youtube-square"></i>
            </li>
            <li>
              <i className="fas fa-phone-square-alt"></i>
            </li>
          </ul>
          <div className="ligne"></div>
          <p>© 2020 - SMovie</p>
        </footer>
    );
  }
}

export default HomeContact;
