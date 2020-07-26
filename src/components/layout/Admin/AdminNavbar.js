import React, { Component } from "react";
import { Link } from "react-router-dom";

class AdminNavbar extends Component {
  render() {
    return (
      <div className="movie_navbar">
        <Link className="linkStyle" to="/admin">
          <h1 onClick={()=>{this.props.handleChangeMovieData()}}>SMovie</h1>
        </Link>
        <ul className="movie_navbar_list admin_navbar_list">
          <Link className="linkStyle" to="/admin">
            <li onClick={()=>{this.props.handleChangeMovieData()}}>Home</li>
          </Link>
          |
          <Link className="linkStyle" to="/admin/addMovie">
            <li>Add Movie</li>
          </Link>
          |
          <Link className="linkStyle" to="/admin/feedbacks">
            <li>user's feedbacks</li>
          </Link>
          <Link className="linkStyle" to="/">
            <li className="user_logout">
              Deconnection
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default AdminNavbar;
