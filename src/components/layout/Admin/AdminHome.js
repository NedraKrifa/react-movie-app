import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";
import MovieSearch from "../Movie/MovieSearch";
import MovieList from "../Movie/MovieList";

class AdminHome extends Component {
  render() {
    return (
      <div>
        <AdminNavbar />
        <div className="admin_page">
          <div className="search_admin">
            <MovieSearch
              searchTerm={this.props.searchTerm}
              searchMovie={this.props.searchMovie}
              handleChange={this.props.handleChange}
            />
          </div>
          <MovieList movieList={this.props.movieList} />
        </div>
      </div>
    );
  }
}

export default AdminHome;
