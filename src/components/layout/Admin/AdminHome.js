import React, { Component } from "react";
import AdminNavbar from "./AdminNavbar";
import MovieSearch from "../Movie/MovieSearch";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieListAdmin from "./MovieListAdmin";

class AdminHome extends Component {
  render() {
    return (
      <Router>
        <div>
          <AdminNavbar handleChangeMovieData={this.props.handleChangeMovieData}/>
          <Route
            exact
            path="/admin"
            render={(props) => (
              <div className="admin_page">
                <div className="search_admin">
                  <MovieSearch
                    searchTerm={this.props.searchTerm}
                    searchMovie={this.props.searchMovie}
                    handleChange={this.props.handleChange}
                  />
                </div>
                <MovieListAdmin movieList={this.props.movieList} deleteMovie={this.props.deleteMovie}/>
              </div>
            )}
          />
          <Route
            path="/admin/addMovie"
            render={(props) => (
              <AddMovie
                movieTotal={this.props.movieList}
                movieName={this.props.movieName}
                movieDescription={this.props.movieDescription}
                movieRate={this.props.movieRate}
                movieTrailer={this.props.movieTrailer}
                movieStreaming={this.props.movieStreaming}
                moviePoster={this.props.moviePoster}
                movieCategories={this.props.movieCategories}
                movieRealeaseDate={this.props.movieRealeaseDate}
                movieActor1={this.props.movieActor1}
                movieActor2={this.props.movieActor2}
                movieActor3={this.props.movieActor3}
                addMovie={this.props.addMovie}
                handleChangeMovie={this.props.handleChangeMovie}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default AdminHome;
