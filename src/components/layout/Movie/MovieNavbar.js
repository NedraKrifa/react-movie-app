import React, { Component } from "react";
import MovieSearch from "./MovieSearch";
import Avatar from "../../../images/avatar.png";
class MovieNavbar extends Component {
  render() {
    return (
      <div className="movie_navbar">
        <h1>SMovie</h1>
        <MovieSearch
          searchTerm={this.props.searchTerm}
          searchMovie={this.props.searchMovie}
          handleChange={this.props.handleChange}
        />
        <div className="navbar_menu">
          <div className="wish_list">
            <i className="fas fa-star"><span>WishList</span></i>
          </div>
          <div className="dropdown">
            <img src={Avatar} className="dropbtn account_avatar" alt="avatar"/>
            <div className="dropdown-content">
              <a href="#">NedraKrifa</a>
              <a href="#">Home</a>
              <a href="#">Logout</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieNavbar;
