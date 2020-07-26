import React, { Component } from "react";
import { categoriesMovie } from "../../../data/data";

class AddMovie extends Component {
  render() {
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
