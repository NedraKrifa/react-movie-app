import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeImage from "../../images/background.png";
import HomeNavbar from "../layout/HomeNavbar";
import Login from "../layout/Login";
import Register from "../layout/register";
import HomeInfo from "../layout/HomeInfo";
import HomeContact from "../layout/HomeContact";

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="home_page">
          <div className="home_image">
            <img src={HomeImage} alt="home_image" width="100%" />
            <div className="home_top_navbar">
              <HomeNavbar />
            </div>
            <Route
              exact
              path="/"
              render={(props) => (
                <div className="home_title">
                  <h1>Unlimited movies, TV shows, and more.</h1>
                  <p>Watch anywhere. Cancel anytime.</p>
                </div>
              )}
            />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
          </div>
          <HomeInfo />
          <HomeContact />
        </div>
      </Router>
    );
  }
}

export default Home;
