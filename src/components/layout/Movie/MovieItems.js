import React, { Component } from "react";

class MovieItems extends Component {
  getFavoriStyle = () => {
    return {
      backgroundColor: this.props.movie.statusFavori
        ? "crimson"
        : "rgba(16, 23, 53, 0.8)",
    };
  };
  render() {
    const {
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
          style={this.getFavoriStyle()}
          onClick={(id) => this.props.markStatusFavori(id)}
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
