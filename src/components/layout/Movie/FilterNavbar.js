import React, { Component } from "react";
import { categoriesMovie } from "../../../data/data";

const movieDate = ["Year", 2020, 2019, 2018, 2017];
export class FilterNavbar extends Component {
  getMovieContactStyle = () => {
    return {
      backgroundColor: this.props.toggleButton ? "white" : "#0F1620",
    };
  };
  getMovieNavbarStyle = () => {
    return {
      backgroundColor: this.props.toggleButton ? "white" : "#0F1620",
      color: this.props.toggleButton ? "black" : "white",
    };
  };
  getMovieInputStyle = () => {
    return {
      background: this.props.toggleButton ? "white" : "#01060E",
      border: this.props.toggleButton ? "1px solid black" : "none",
      color : this.props.toggleButton ? "black" : "grey",
    };
  };
  render() {
    return (
      <div>
        <div className="filter_contact" style={this.getMovieContactStyle()}>
          <p style={{ fontSize: "25px", borderBottom: "1px solid grey" }}>
            Follow SMovie
          </p>
          <p>@SmartMovie</p>
        </div>
        <form className="filter_navbar" style={this.getMovieNavbarStyle()}>
          <h1 style={{ color: "#fb2525" }}>Movie Filter</h1>
          <label>Movie Realease Date</label>
          <select
            name="dropdown"
            style={this.getMovieInputStyle()}
            value={this.props.dateValue}
            onChange={(e) => this.props.handleChangeData(e)}
          >
            {movieDate.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
          <label>Movie Categories</label>
          <select
            name="dropdown"
            style={this.getMovieInputStyle()}
            value={this.props.categoryValue}
            onChange={(e) => this.props.handleChangeCategory(e)}
          >
            {["category", ...categoriesMovie].map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <label>Movie Rate</label>
          <input
            type="number"
            name="movieRate"
            style={this.getMovieInputStyle()}
            value={this.props.rateValue}
            placeholder="Your movie rate..."
            min="0"
            max="5"
            onChange={(e) => this.props.handleChangeRate(e)}
          />
          <input
            type="submit"
            value="Filter"
            onClick={(e) => this.props.movieFilter(e)}
          />
        </form>
      </div>
    );
  }
}

export default FilterNavbar;
