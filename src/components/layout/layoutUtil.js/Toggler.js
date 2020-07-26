import React, { Component } from "react";
import "./TogglerStyle.css";

class Toggler extends Component {
  getToggleStyle = () => {
    return {
      transform: this.props.toggleButton
        ? "translateX(24px)"
        : "translateX(0px)",
    };
  };
  render() {
    return (
      <div className="toggle">
        <div className="label" onClick={() => this.props.handleChangeTheme()}>
          <i className="fas fa-sun"></i>
          <i className="fas fa-moon"></i>
          <div className="ball" style={this.getToggleStyle()}></div>
        </div>
      </div>
    );
  }
}

export default Toggler;
