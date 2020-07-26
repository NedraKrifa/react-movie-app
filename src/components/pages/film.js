import React, { Component } from "react";
import StarRate from "../layout/layoutUtil.js/starRate";

class film extends Component {
  render() {
    const {
      movieName,
      movieDescription,
      movieTrailer,
      movieCategories,
      movieActors,
      movieRate,
      moviePoster,
      movieRealeaseDate,
    } = this.props.movie;
    return (
      <div className="film">
        <div className="film_container">
          <img
            className="film_image"
            src={moviePoster}
            alt="movie_film"
            width="350px"
            height="500px"
          />
          <div className="film_details">
            <h1>{movieName.toUpperCase()}</h1>
            <div className="film_story">
              <h4 style={{ color: "#61dafb" }}>STORY</h4>
              <p>{movieDescription}</p>
            </div>
            <div className="film_category">
              <h1>{movieCategories.join(", ")}</h1>
            </div>
            <div class="film_date-rate">
              <div className="film_date">
                <h4 style={{ color: "#61dafb" }}>Original Release</h4>
                <p>{movieRealeaseDate}</p>
              </div>
              <div className="film_rate">
                <h4 style={{ color: "#61dafb" }}>Vote Average</h4>
                <StarRate sizeOfStars={5} rate={movieRate} />
              </div>
            </div>
          </div>
        </div>
        <div className="film_trailer">
          <div className="film_bottom">
            <h1>Movie Trailer</h1>
          </div>
          <iframe width="800" height="500" src={movieTrailer}></iframe>
        </div>
        <div className="film_actors">
          <div className="film_bottom">
            <h1>Actors</h1>
          </div>
          <div style={{ textAlign: "center" }}>
            {movieActors.map((actor) => (
              <span>{actor}</span>
            ))}
          </div>
        </div>
        <p style={{ color: "rgb(126, 126, 126)", textAlign: "center" }}>
          @SMovie
        </p>
      </div>
    );
  }
}

export default film;
