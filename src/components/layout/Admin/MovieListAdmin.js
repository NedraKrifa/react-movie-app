import React, { Component } from "react";
import MovieItemsAdmin from "./MovieItemsAdmin";

class MovieListAdmin extends Component {
  render() {
    return (
      <div className="Movie_list">
        {this.props.movieList.map((movie) => (
          <MovieItemsAdmin
            key={movie.id}
            movie={movie}
            deleteMovie={this.props.deleteMovie}
          />
        ))}
      </div>
    );
  }
}

export default MovieListAdmin;
