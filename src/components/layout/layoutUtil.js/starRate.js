import React, { Component } from "react";

class starRate extends Component {
  getStyleStar = (id) => {
    const rate = this.props.rate;
    const rateList = this.getArray(rate);
    return {
      color: rateList.includes(id) ? "yellow" : "gray",
      fontSize: "40px",
    };
  };
  getArray = (n) => {
    return Array(n)
      .fill(0)
      .map((e, i) => n - i)
      .reverse();
  };
  render() {
    return (
      <div className="stars">
        {this.getArray(this.props.sizeOfStars).map((el) => {
          return (
            <i
              className="star"
              style={this.getStyleStar(el)}
              className="fas fa-star favori-btn"
              id={el}
              key={el}
            />
          );
        })}
      </div>
    );
  }
}

export default starRate;
