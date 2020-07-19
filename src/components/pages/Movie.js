import React, { Component } from "react";
import MovieList from "../layout/Movie/MovieList";
import MovieNavbar from "../layout/Movie/MovieNavbar";
import Pagination from "../layout/Movie/Pagination";
import FilterNavbar from "../layout/Movie/FilterNavbar";

class Movie extends Component {
  state = {
    movieSearch: this.props.movieList,
    currentPage: 1,
    moviesPerPage: 12,
    searchTerm: "",
  };
  paginate = (pageNumber) => {
    this.setState({
      currentPage: pageNumber,
    });
  };
  paginateNext = (n) => {
    if (this.state.currentPage < n) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };
  paginatePrev = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
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
    return [...movies].filter((movie) => {
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

  render() {
    //pagination
    const indexOfLastMovie = this.state.currentPage * this.state.moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - this.state.moviesPerPage;
    const currentMovies = this.state.movieSearch.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );

    return (
      <div className="movie_page">
        <MovieNavbar
          searchTerm={this.state.searchTerm}
          searchMovie={this.searchMovie}
          handleChange={this.handleChange}
        />
        <div className="movie_list_container">
          <div className="movie_list_filter">
            <FilterNavbar />
            <MovieList movieList={currentMovies} markStatusFavori={this.props.markStatusFavori}/>
          </div>
          <Pagination
            moviesPerPage={this.state.moviesPerPage}
            movieListSize={this.state.movieSearch.length}
            currentPage={this.state.currentPage}
            paginate={this.paginate}
            paginateNext={this.paginateNext}
            paginatePrev={this.paginatePrev}
          />
        </div>
      </div>
    );
  }
}

export default Movie;
