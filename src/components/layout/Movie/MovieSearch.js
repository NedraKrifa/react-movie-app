import React, { Component } from "react";

class MovieSearch extends Component {
  getMovieInputStyle = () => {
    return {
      flex: "10",
      padding: "5px",
      background: this.props.toggleButton ? "white" : "#01060E",
      border: this.props.toggleButton ? "1px solid black" : "none",
      color : this.props.toggleButton ? "black" : "grey",
      borderRadius: "5px",
    };
  };
  render() {
    return (
      <form
        style={{
          display: "flex",
          width: "700px",
          height: "40px",
          padding: "20px",
        }}
      >
        <input
          type="text"
          name="title"
          value={this.props.searchTerm}
          placeholder="Search for a movies ..."
          style={this.getMovieInputStyle()}
          onChange={(e) => this.props.handleChange(e)}
        />
        <input
          type="submit"
          value="Search"
          className="btn"
          style={{ flex: "1" }}
          onClick={(e) => this.props.searchMovie(e)}
        />
      </form>
    );
  }
}

export default MovieSearch;
