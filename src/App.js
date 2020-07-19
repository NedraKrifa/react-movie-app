import React, { Component } from "react";
import Home from "./components/pages/Home";
import Movie from "./components/pages/Movie";
import "./App.css";
import Admin from "./components/pages/Admin";
import { movies } from "./data/data";

class App extends Component {
  state = {
    movieList: movies,
    movieName: "",
    movieDescription: "",
    movieRate: 0,
    movieTrailer: "",
    movieStreaming: "",
    moviePoster: "",
    movieCategories: [],
    movieRealeaseDate: null,
    movieActor1: "",
    movieActor2: "",
    movieActor3: "",
  };
  markStatusFavori = (id) => {
    this.setState({
      movieList: this.state.movieList.map((movie) => {
        if (movie.id=== id) {
          movie.statusFavori = !movie.statusFavori;
        }
        return movie;
      }),
    });
  };
  handleChangeMovie = (e, category) => {
    switch (e.target.name) {
      case "movieName":
        this.setState({ movieName: e.target.value });
        break;
      case "moviePoster":
        this.setState({ moviePoster: e.target.value });
        break;
      case "movieTrailer":
        this.setState({ movieTrailer: e.target.value });
        break;
      case "movieStreaming":
        this.setState({ movieStreaming: e.target.value });
        break;
      case "movieRealeaseDate":
        this.setState({ movieRealeaseDate: e.target.value});
        break;
      case "movieRate":
        this.setState({ movieRate: e.target.value });
        break;
      case "movieActor1":
        this.setState({ movieActor1: e.target.value });
        break;
      case "movieActor2":
        this.setState({ movieActor2: e.target.value });
        break;
      case "movieActor3":
        this.setState({ movieActor3: e.target.value });
        break;
      case "movieCategory":
        this.setState((prevState) => ({
          movieCategories: [...prevState.movieCategories, category],
        }));
        break;
      case "movieDescription":
        this.setState({ movieDescription: e.target.value });
        break;
    }
  };
  resetInputField = () => {
    this.setState({
      movieName: "",
      movieDescription: "",
      movieRate: 0,
      movieTrailer: "",
      movieStreaming: "",
      moviePoster: "",
      movieCategories: [],
      movieRealeaseDate: null,
      movieActor1: "",
      movieActor2: "",
      movieActor3: "",
    });
  };
  addMovie = (e) => {
    e.preventDefault();
    const movie = {
      id: this.state.movieList.length + 1,
      movieName: this.state.movieName,
      movieDescription: this.state.movieDescription,
      movieRate: parseInt(this.state.movieRate),
      movieTrailer: this.state.movieTrailer,
      movieStreaming: this.state.movieStreaming,
      moviePoster: this.state.moviePoster,
      movieCategories: this.state.movieCategories,
      movieRealeaseDate: parseInt(this.state.movieRealeaseDate.split("-")[0]),
      movieActors: [
        this.state.movieActor1,
        this.state.movieActor2,
        this.state.movieActor3,
      ],
    };
    this.setState({
      movieList: [...this.state.movieList, movie],
    });
    this.resetInputField();
  };
  render() {
    console.log(this.state.movieList);
    return (
      <div>
        <Movie movieList={this.state.movieList} markStatusFavori={this.markStatusFavori}/>
      </div>
    );
  }
}

export default App;
/*
        <Admin
          movieList={this.state.movieList}
          movieName={this.state.movieName}
          movieDescription={this.state.movieDescription}
          movieRate={this.state.movieRate}
          movieTrailer={this.state.movieTrailer}
          movieStreaming={this.state.movieStreaming}
          moviePoster={this.state.moviePoster}
          movieCategories={this.state.movieCategories}
          movieRealeaseDate={this.state.movieRealeaseDate}
          movieActor1={this.state.movieActor1}
          movieActor2={this.state.movieActor2}
          movieActor3={this.state.movieActor3}
          addMovie={this.addMovie}
          handleChangeMovie={this.handleChangeMovie}
        />
*/