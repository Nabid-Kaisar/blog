import React, { Component } from "react";
import "./NavBarStyle.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="#home" className="home">
            Home
          </a>

          <div className="dropdown">
            <button className="dropbtn">
              Category
              <i className="fa fa-caret-down" />
            </button>
            <div className="dropdown-content">
              <a href="#">Science</a>
              <a href="#">Sports</a>
              <a href="#">Travel</a>
              <a href="#">Stories</a>
              <a href="#">Others</a>
            </div>
          </div>

          <a href="#post">Post Now</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
