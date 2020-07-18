import React, { Component } from "react";
import { movies } from "../../data/data";
import AdminHome from "../layout/Admin/AdminHome";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Admin extends Component {
  state = {
    movieList: movies,
    movieSearch: movies,
    searchTerm: "",
  };
  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };
  resetInputField = () => {
    this.setState({
      searchTerm: "",
    });
  };
  filteredMovies = (movies, search) => {
    return movies.filter((movie) => {
      return movie.movieName.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
  };
  searchMovie = (e) => {
    e.preventDefault();
    const movieFilter = this.filteredMovies(
      this.state.movieList,
      this.state.searchTerm
    );
    this.setState({
      movieSearch: movieFilter,
    });
    console.log(movieFilter);
    console.log(this.state.searchTerm);
    this.resetInputField();
  };
  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            render={(props) => (
              <AdminHome
                searchTerm={this.state.searchTerm}
                searchMovie={this.searchMovie}
                handleChange={this.handleChange}
                movieList={this.state.movieSearch}
              />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default Admin;
