import React, { Component } from "react";
import MovieItems from "./MovieItems";

class MovieList extends Component {
  render() {
    return (
      <div className="Movie_list">
        {this.props.movieList.map((movie) => (
          <MovieItems key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

export default MovieList;
