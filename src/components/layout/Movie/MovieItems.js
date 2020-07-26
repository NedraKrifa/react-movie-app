import React, { Component } from "react";
import { Link } from "react-router-dom";

class MovieItems extends Component {
  getFavoriStyle = () => {
    return {
      backgroundColor: this.props.movie.statusFavori
        ? "#fb2525"
        : "rgba(16, 23, 53, 0.8)",
    };
  };
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
        <Link to="/movie/film">
          <img
            className="movie_image"
            src={moviePoster}
            alt="movie_item"
            width="200px"
            height="280px"
            onClick={this.props.getMovieId.bind(this,id)}
          />
        </Link>
        <div
          className="polygone"
          style={this.getFavoriStyle()}
          onClick={this.props.markStatusFavori.bind(this, id)}
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
