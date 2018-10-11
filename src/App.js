import React, { Component } from 'react';
import Header from "./Header.js"
import SearchBarTop from "./SearchBarTop"
import './App.css';
import NavBar from "./NavBar"

class App extends Component {
  render() {
    return (
      <div>
      <div className="titleCompContainer">
        <Header />
        <SearchBarTop />
      </div>
      <div className="navBar">
      <NavBar/>
      </div>
      </div>
    );
  }
}

export default App;
