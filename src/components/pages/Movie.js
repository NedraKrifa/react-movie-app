import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MovieList from "../layout/Movie/MovieList";
import MovieNavbar from "../layout/Movie/MovieNavbar";
import Pagination from "../layout/Movie/Pagination";
import FilterNavbar from "../layout/Movie/FilterNavbar";
import Film from "./Film";
import Toggler from "../layout/layoutUtil.js/Toggler";
import Filter from "../layout/Movie/Filter";
class Movie extends Component {
  state = {
    movieSearch: this.props.movieList,
    currentPage: 1,
    moviesPerPage: 12,
    searchTerm: "",
    dateValue: "Year",
    categoryValue: "category",
    rateValue: 0,
    movieId: 0,
    toggleButton: false,
    filterValue: "Filter",
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
      currentPage: 1,
    });
    console.log(movieFilter);
    console.log(this.state.searchTerm);
    this.resetInputField();
  };
  handleChangeMovieData = () => {
    this.setState({
      movieSearch: this.props.movieList,
      currentPage: 1,
    });
  };
  /*filter*/
  handleChangeData = (e) => {
    this.setState({ dateValue: e.target.value });
  };
  handleChangeCategory = (e) => {
    this.setState({ categoryValue: e.target.value });
  };
  handleChangeRate = (e) => {
    this.setState({ rateValue: e.target.value });
  };
  resetInputFieldFilter = () => {
    this.setState({
      dateValue: "Year",
      categoryValue: "category",
      rateValue: 0,
    });
  };
  movieFilter = (e) => {
    e.preventDefault();
    if (
      this.state.dateValue !== "Year" &&
      this.state.categoryValue !== "category" &&
      this.state.rateValue !== 0
    ) {
      this.setState({
        movieSearch: [
          ...this.props.movieList.filter(
            (movie) =>
              movie.movieRealeaseDate == this.state.dateValue &&
              movie.movieCategories.includes(this.state.categoryValue) &&
              movie.movieRate == this.state.rateValue
          ),
        ],
        currentPage: 1,
      });
    } else if (
      this.state.dateValue !== "Year" &&
      this.state.categoryValue !== "category" &&
      !(this.state.rateValue !== 0)
    ) {
      this.setState({
        movieSearch: [
          ...this.props.movieList.filter(
            (movie) =>
              movie.movieRealeaseDate == this.state.dateValue &&
              movie.movieCategories.includes(this.state.categoryValue)
          ),
        ],
        currentPage: 1,
      });
    } else if (
      this.state.dateValue !== "Year" &&
      !(this.state.categoryValue !== "category") &&
      this.state.rateValue !== 0
    ) {
      this.setState({
        movieSearch: [
          ...this.props.movieList.filter(
            (movie) =>
              movie.movieRealeaseDate == this.state.dateValue &&
              movie.movieRate == this.state.rateValue
          ),
        ],
        currentPage: 1,
      });
    } else if (
      this.state.dateValue !== "Year" &&
      !(this.state.categoryValue !== "category") &&
      !(this.state.rateValue !== 0)
    ) {
      this.setState({
        movieSearch: [
          ...this.props.movieList.filter(
            (movie) => movie.movieRealeaseDate == this.state.dateValue
          ),
        ],
        currentPage: 1,
      });
    } else if (
      !(this.state.dateValue !== "Year") &&
      this.state.categoryValue !== "category" &&
      this.state.rateValue !== 0
    ) {
      this.setState({
        movieSearch: [
          ...this.props.movieList.filter(
            (movie) =>
              movie.movieCategories.includes(this.state.categoryValue) &&
              movie.movieRate == this.state.rateValue
          ),
        ],
        currentPage: 1,
      });
    } else if (
      !(this.state.dateValue !== "Year") &&
      !(this.state.categoryValue !== "category") &&
      this.state.rateValue !== 0
    ) {
      this.setState({
        movieSearch: [
          ...this.props.movieList.filter(
            (movie) => movie.movieRate == this.state.rateValue
          ),
        ],
        currentPage: 1,
      });
    } else if (
      !(this.state.dateValue !== "Year") &&
      this.state.categoryValue !== "category" &&
      !(this.state.rateValue !== 0)
    ) {
      this.setState({
        movieSearch: [
          ...this.props.movieList.filter((movie) =>
            movie.movieCategories.includes(this.state.categoryValue)
          ),
        ],
        currentPage: 1,
      });
    } else {
      this.setState({
        movieSearch: [...this.props.movieList],
        currentPage: 1,
      });
    }
    this.resetInputFieldFilter();
  };
  /*filter*/
  handleChangeFilter = (e) => {
    this.setState({
      filterValue: e.target.value,
    });
  };
  resetFilter=()=>{
    this.setState({filterValue : "Filter"})
  }
  movieFilterGo = (e) => {
    e.preventDefault();
    console.log(this.state.filterValue);
    if (this.state.filterValue === "Top Rate") {
      this.setState({
        movieSearch: [...this.props.movieList].sort((a,b)=>b.movieRate-a.movieRate),
        currentPage: 1,
      })
    } else if (this.state.filterValue === "Latest Releases") {
      this.setState({
        movieSearch: [...this.props.movieList].sort((a,b)=>b.movieRealeaseDate-a.movieRealeaseDate),
        currentPage: 1,
      })
    } else if (this.state.filterValue === "Earliest Releases") {
      this.setState({
        movieSearch: [...this.props.movieList].sort((a,b)=>a.movieRealeaseDate-b.movieRealeaseDate),
        currentPage: 1,
      })
    } else {
      this.setState({
        movieSearch: [...this.props.movieList],
        currentPage: 1,
      });
    }
    this.resetFilter();
  };
  /*film*/
  getMovieId = (id) => {
    this.setState({
      movieId: id,
    });
  };
  /*theme toggler*/
  handleChangeTheme = () => {
    this.setState({ toggleButton: !this.state.toggleButton });
  };
  /*theme*/
  getMoviePageStyle = () => {
    return {
      backgroundColor: this.state.toggleButton ? "#ECF0F0" : "#01060E",
    };
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
      <Router>
        <div className="movie_page" style={this.getMoviePageStyle()}>
          <MovieNavbar
            searchTerm={this.state.searchTerm}
            searchMovie={this.searchMovie}
            handleChange={this.handleChange}
            handleChangeMovieData={this.handleChangeMovieData}
            toggleButton={this.state.toggleButton}
          />
          <div className="movie_list_container">
            <Route
              exact
              path="/movie"
              render={(props) => (
                <React.Fragment>
                  <div className="movie_list_filter">
                    <FilterNavbar
                      movieFilter={this.movieFilter}
                      dateValue={this.state.dateValue}
                      categoryValue={this.state.categoryValue}
                      rateValue={this.state.rateValue}
                      handleChangeData={this.handleChangeData}
                      handleChangeCategory={this.handleChangeCategory}
                      handleChangeRate={this.handleChangeRate}
                      toggleButton={this.state.toggleButton}
                    />
                    <MovieList
                      movieList={currentMovies}
                      markStatusFavori={this.props.markStatusFavori}
                      getMovieId={this.getMovieId}
                      toggleButton={this.state.toggleButton}
                    />
                    <div>
                      <Toggler
                        toggleButton={this.state.toggleButton}
                        handleChangeTheme={this.handleChangeTheme}
                      />
                      <Filter
                        toggleButton={this.state.toggleButton}
                        filterValue={this.state.filterValue}
                        handleChangeFilter={this.handleChangeFilter}
                        movieFilterGo={this.movieFilterGo}
                      />
                    </div>
                  </div>
                  <Pagination
                    moviesPerPage={this.state.moviesPerPage}
                    movieListSize={this.state.movieSearch.length}
                    currentPage={this.state.currentPage}
                    paginate={this.paginate}
                    paginateNext={this.paginateNext}
                    paginatePrev={this.paginatePrev}
                    toggleButton={this.state.toggleButton}
                  />
                </React.Fragment>
              )}
            />
            <Route
              path="/movie/wishlist"
              render={(props) => (
                <MovieList
                  movieList={this.props.movieList.filter(
                    (movie) => movie.statusFavori
                  )}
                  markStatusFavori={this.props.markStatusFavori}
                  getMovieId={this.getMovieId}
                />
              )}
            />
            <Route
              path="/movie/film"
              render={(props) => (
                <Film movie={this.props.movieList[this.state.movieId - 1]} />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default Movie;
