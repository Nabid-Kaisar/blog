import React, { Component } from "react";
import blogicon2 from "./resources/blogicon.png";
import "./headerStyle.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="iconContainer">
          <img src={blogicon2} alt={"blogicon2"} className="iconStyle" />
          <h2 className="iconText">A place for your Blog</h2>
        </div>
      </div>
    );
  }
}

export default Header;
