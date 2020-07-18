import React, { Component } from "react";

class MovieItems extends Component {
  render() {
    const {
      id,
      movieName,
      movieRate,
      moviePoster,
      movieRealeaseDate,
    } = this.props.movie;
    return (
      <div className="Movie_item">
        <img
          className="movie_image"
          src={moviePoster}
          alt="movie_item"
          width="200px"
          height="280px"
        />
        <div
          className="polygone"
          onClick={() => {
            console.log("hi");
          }}
        >
          <div>+</div>
        </div>
        <div className="star">
          <div>{movieRate}</div>
        </div>
        <h4>
          {movieName}( {movieRealeaseDate} )
        </h4>
      </div>
    );
  }
}

export default MovieItems;
