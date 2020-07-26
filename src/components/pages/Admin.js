import React, { Component } from "react";
import AdminHome from "../layout/Admin/AdminHome";

class Admin extends Component {
  state = {
    movieSearch: this.props.movieList,
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
      this.props.movieList,
      this.state.searchTerm
    );
    this.setState({
      movieSearch: movieFilter,
    });
    console.log(movieFilter);
    console.log(this.state.searchTerm);
    this.resetInputField();
  };
  handleChangeMovieData = () => {
    this.setState({
      movieSearch: this.props.movieList,
    });
  };
  render() {
    return (
      <div>
        <AdminHome
          handleChangeMovieData={this.handleChangeMovieData}
          searchTerm={this.state.searchTerm}
          searchMovie={this.searchMovie}
          handleChange={this.handleChange}
          movieList={this.state.movieSearch}
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
          deleteMovie={this.props.deleteMovie}
        />
      </div>
    );
  }
}

export default Admin;
