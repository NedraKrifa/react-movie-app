import React, { Component } from "react";
import MovieItems from "./MovieItems";

class MovieList extends Component {
  getMovieListStyle=()=>{
    return {
      backgroundColor: this.props.toggleButton
        ? "white"
        : "#0F1620",
    };
  }
  render() {
    return (
      <div className="Movie_list" style={this.getMovieListStyle()}>
        {this.props.movieList.map((movie) => (
          <MovieItems key={movie.id} movie={movie} markStatusFavori={this.props.markStatusFavori} getMovieId={this.props.getMovieId} />
        ))}
      </div>
    );
  }
}

export default MovieList;
