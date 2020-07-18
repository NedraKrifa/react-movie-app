import React, { Component } from "react";
import MovieSearch from "./MovieSearch";
import Avatar from "../../../images/avatar.png";
class MovieNavbar extends Component {
  render() {
    return (
      <div className="movie_navbar">
        <h1>SMovie</h1>
        <MovieSearch searchTerm={this.props.searchTerm} searchMovie={this.props.searchMovie} handleChange={this.props.handleChange} />
        <ul className="movie_navbar_list">
          <li>Home</li>
          <li>
            <img src={Avatar} className="account_avatar" />
          </li>
          <li>
            <span>NedraKrifa</span>
          </li>
          <li className="user_logout">Logout</li>
        </ul>
      </div>
    );
  }
}

export default MovieNavbar;
