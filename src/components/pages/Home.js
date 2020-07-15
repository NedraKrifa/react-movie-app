import React, { Component } from "react";
import HomeImage from "../../images/background.png";
import HomeNavbar from "../layout/HomeNavbar";
import Login from "../layout/Login";
import Register from "../layout/register";

class Home extends Component {
  render() {
    return (
      <div className="home_page">
        <div className="home_image">
          <img src={HomeImage} alt="home_image" width="100%" />
          <div className='home_top_navbar'>
            <HomeNavbar />
          </div>
          <div className="home_title">
            <h1>Unlimited movies, TV shows, and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
          </div>
          <Login />
          <Register />
        </div>
      </div>
    );
  }
}

export default Home;
