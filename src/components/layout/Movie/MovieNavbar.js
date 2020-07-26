import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieSearch from "./MovieSearch";
import Avatar from "../../../images/avatar.png";
class MovieNavbar extends Component {
  getNavbarStyle = () => {
    return {
      backgroundColor: this.props.toggleButton ? "#F9F9F9" : "#071529",
      boxShadow: this.props.toggleButton
        ? "1px 0 2px 1px #DDDDDD"
        : "1px 0 2px 1px #061932",
    };
  };
  render() {
    return (
      <div className="movie_navbar" style={this.getNavbarStyle()}>
        <Link className="linkStyle" to="/movie">
          <h1
            onClick={() => {
              this.props.handleChangeMovieData();
            }}
          >
            SMovie
          </h1>
        </Link>
        <MovieSearch
          searchTerm={this.props.searchTerm}
          searchMovie={this.props.searchMovie}
          handleChange={this.props.handleChange}
          toggleButton={this.props.toggleButton}
        />
        <div className="navbar_menu">
          <div className="wish_list">
            <Link className="linkStyle_wishlist" to="/movie/wishlist">
              <i className="fas fa-star">
                <span>WishList</span>
              </i>
            </Link>
          </div>
          <div className="dropdown">
            <img src={Avatar} className="dropbtn account_avatar" alt="avatar" />
            <div className="dropdown-content">
              <Link
                className="dropdown-content-link"
                to="/movie"
                onClick={() => {
                  this.props.handleChangeMovieData();
                }}
              >
                NedraKrifa
              </Link>
              <Link
                className="dropdown-content-link"
                to="/movie"
                onClick={() => {
                  this.props.handleChangeMovieData();
                }}
              >
                Home
              </Link>
              <Link className="dropdown-content-link" to="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieNavbar;
