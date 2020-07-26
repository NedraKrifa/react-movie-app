import React, { Component } from "react";

class Pagination extends Component {
  getArray = (n) => {
    return Array(n)
      .fill(0)
      .map((e, i) => n - i)
      .reverse();
  };
  getStylePage = (number) => {
    return {
      color: number === this.props.currentPage ? "#fb2525" : "#61dafb",
      transform: number === this.props.currentPage ? "scale(1.5)" : "none",
    };
  };
  getStylePagePrev = () => {
    return {
      color: this.props.currentPage === 1 ? "grey" : "#61dafb",
    };
  };
  getStylePageNext = () => {
    return {
      color: this.props.currentPage === 4 ? "grey" : "#61dafb",
    };
  };
  getPaginationStyle = () => {
    return {
      backgroundColor: this.props.toggleButton ? "white" : "#071529",
    };
  };
  render() {
    const {
      moviesPerPage,
      movieListSize,
      paginate,
      paginateNext,
      paginatePrev,
    } = this.props;
    const n = Math.ceil(movieListSize / moviesPerPage);
    const pageNumbers = this.getArray(n);
    return (
      <div className="pagination_container">
        <ul className="pagination" style={this.getPaginationStyle()}>
          <li style={this.getStylePagePrev()} onClick={() => paginatePrev()}>
            PREV
          </li>
          {pageNumbers.map((number) => (
            <li
              key={number}
              style={this.getStylePage(number)}
              onClick={() => paginate(number)}
            >
              {number}
            </li>
          ))}
          <li style={this.getStylePageNext()} onClick={() => paginateNext(n)}>
            NEXT
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
