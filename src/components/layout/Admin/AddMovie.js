import React, { Component } from "react";
import { categoriesMovie } from "../../../data/data";

class AddMovie extends Component {
  /*state = {
    id: this.props.movieTotal.length + 1,
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
  handleChange = (e, category) => {
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
        this.setState({ movieRealeaseDate: e.target.value.split("-")[0] });
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
      id: this.props.movieTotal.length + 1,
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
  /*addMovie = (e) => {
    e.preventDefault();
    console.log({
      id: this.props.movieTotal.length + 1,
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
    });
    this.resetInputField();
  };*/
  render() {
    /*const movie = {
      id: this.props.movieTotal.length + 1,
      movieName: this.state.movieName,
      movieDescription: this.state.movieDescription,
      movieRate: parseInt(this.state.movieRate),
      movieTrailer: this.state.movieTrailer,
      movieStreaming: this.state.movieStreaming,
      moviePoster: this.state.moviePoster,
      movieCategories: this.state.movieCategories,
      movieRealeaseDate: parseInt(this.state.movieRealeaseDate),
      movieActors: [
        this.state.movieActor1,
        this.state.movieActor2,
        this.state.movieActor3,
      ],
    };*/
    return (
      <div className="form">
        <h1>Add a movie to the List</h1>
        <form className="form_container">
          <div className="form_group">
            <label>Movie Name</label>
            <input
              type="text"
              name="movieName"
              value={this.props.movieName}
              placeholder="Your movie name..."
              required
              onChange={(e) => this.props.handleChangeMovie(e)}
            />
          </div>
          <div className="form_group">
            <label>Movie Poster</label>
            <input
              type="text"
              name="moviePoster"
              value={this.props.moviePoster}
              placeholder="Your movie poster Url..."
              required
              onChange={(e) => this.props.handleChangeMovie(e)}
            />
          </div>
          <div className="form_group">
            <label>Movie Trailer</label>
            <input
              type="text"
              name="movieTrailer"
              value={this.props.movieTrailer}
              placeholder="Your movie trailer Link..."
              required
              onChange={(e) => this.props.handleChangeMovie(e)}
            />
          </div>
          <div className="form_group">
            <label>Movie Streaming</label>
            <input
              type="text"
              name="movieStreaming"
              value={this.props.movieStreaming}
              placeholder="Your movie streaming Link..."
              onChange={(e) => this.props.handleChangeMovie(e)}
            />
          </div>
          <div className="form_group">
            <label>Movie RealeaseDate</label>
            <input
              type="month"
              name="movieRealeaseDate"
              value={this.props.movieRealeaseDate}
              placeholder="Your movie realease date..."
              required
              onChange={(e) => this.props.handleChangeMovie(e)}
            />
          </div>
          <div className="form_group">
            <label>Movie Rate</label>
            <input
              type="number"
              name="movieRate"
              value={this.props.movieRate}
              placeholder="Your movie rate..."
              min="0"
              max="5"
              required
              onChange={(e) => this.props.handleChangeMovie(e)}
            />
          </div>
          <div className="form_group">
            <label>Movie Actors</label>
            <div className="form_actors">
              <input
                type="text"
                name="movieActor1"
                value={this.props.movieActor1}
                placeholder="first movie actor name..."
                required
                onChange={(e) => this.props.handleChangeMovie(e)}
              />
              <input
                type="text"
                name="movieActor2"
                value={this.props.movieActor2}
                placeholder="second movie actor name..."
                onChange={(e) => this.props.handleChangeMovie(e)}
              />
              <input
                type="text"
                name="movieActor3"
                value={this.props.movieActor3}
                placeholder="third movie actor name..."
                onChange={(e) => this.props.handleChangeMovie(e)}
              />
            </div>
          </div>
          <div className="form_group">
            <label>Movie Categories</label>
            <div>
              {categoriesMovie.map((category) => (
                <div className="form-group_checkbox">
                  <input
                    type="checkbox"
                    name="movieCategory"
                    value={category}
                    onChange={(e) => this.props.handleChangeMovie(e, category)}
                  />
                  <label>{category}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form_group">
            <label>Movie Description</label>
            <textarea
              name="movieDescription"
              value={this.props.movieDescription}
              placeholder="Your movie description..."
              required
              style={{ height: "200px" }}
              onChange={(e) => this.props.handleChangeMovie(e)}
            ></textarea>
          </div>
          <input
            type="submit"
            value="Add"
            onClick={(e) => this.props.addMovie(e)}
          />
          <input type="reset" value="reset" />
        </form>
      </div>
    );
  }
}

export default AddMovie;
