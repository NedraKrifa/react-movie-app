import React, { Component } from "react";
import { categoriesMovie } from "../../../data/data";

const movieDate = ["Year", 2020, 2019, 2018, 2017];
export class FilterNavbar extends Component {
  render() {
    return (
      <div>
          <div className="filter_contact">
              <p style={{fontSize:'25px',borderBottom:'1px solid grey'}}>Follow SMovie</p>
              <p>@SmartMovie</p>
          </div>
        <form className="filter_navbar">
          <h1 style={{color:'#fb2525'}}>Movie Filter</h1>
          <label>Movie Realease Date</label>
          <select name="dropdown">
            {movieDate.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
          <label>Movie Categories</label>
          <select name="dropdown">
            {["category", ...categoriesMovie].map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <label>Movie Rate</label>
          <input
            type="number"
            name="movieRate"
            placeholder="Your movie rate..."
            min="0"
            max="5"
          />
          <input type="reset" value="reset" />
        </form>
      </div>
    );
  }
}

export default FilterNavbar;
