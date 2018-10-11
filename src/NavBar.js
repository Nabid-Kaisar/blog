import React, { Component } from "react";
import "./NavBarStyle.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="topnav">
          <a href="#home" className ="home">Home</a>
          <a href="#category">Category</a>
          <a href="#post">Post Now</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}

export default NavBar;
