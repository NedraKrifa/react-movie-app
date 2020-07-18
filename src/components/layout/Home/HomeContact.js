import React, { Component } from "react";

class HomeContact extends Component {
  render() {
    return (
        <footer>
          <ul class="footer-list">
            <li>
              <i class="fab fa-facebook-square"></i>
            </li>
            <li>
              <i class="fab fa-twitter-square"></i>
            </li>
            <li>
              <i class="fab fa-instagram-square"></i>
            </li>
            <li>
              <i class="fab fa-youtube-square"></i>
            </li>
            <li>
              <i class="fas fa-phone-square-alt"></i>
            </li>
          </ul>
          <div class="ligne"></div>
          <p>© 2020 - SMovie</p>
        </footer>
    );
  }
}

export default HomeContact;
