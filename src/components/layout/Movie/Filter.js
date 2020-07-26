import React, { Component } from "react";

export class Filter extends Component {
  getMovieInputStyle = () => {
    return {
      background: this.props.toggleButton ? "white" : "#071529",
      border: this.props.toggleButton ? "1px solid black" : "none",
      color: this.props.toggleButton ? "black" : "grey",
      padding: "5px",
      borderRadius: "5px",
      height: "30px",
      marginTop: "10px",
      marginBottom: "20px",
    };
  };
  render() {
    return (
      <div style={{marginTop:"30px",transform:"translate(70px)"}}>
        <select
          name="dropdown"
          style={this.getMovieInputStyle()}
          value={this.props.filterValue}
          onChange={(e) => this.props.handleChangeFilter(e)}
        >
          {["Filter", "Top Rate", "Latest Releases", "Earliest Releases"].map(
            (filter) => (
              <option key={filter} value={filter}>
                {filter}
              </option>
            )
          )}
        </select>
        <input
            style={{padding: "6px",background:"#61dafb",border:"none",borderRadius:"5px",cursor:"pointer"}}
            type="submit"
            value="Go"
            onClick={(e) => this.props.movieFilterGo(e)}
          />
      </div>
    );
  }
}

export default Filter;
