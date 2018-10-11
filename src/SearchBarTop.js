import React, { Component } from "react";
import './SearchBarStyle.css'

class SearchBarTop extends Component {
  render() {
    return (
      <div className ="searchBar">
        <input type="text" placeholder="enter keyword to search" className ="inputBox">
        </input>
        <br />
        
        <button className="searchButton">Search</button>

      </div>
    );
  }
}

export default SearchBarTop;
