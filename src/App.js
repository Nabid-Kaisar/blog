import React, { Component } from 'react';
import Header from "./Header.js"
import SearchBarTop from "./SearchBarTop"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <div className="titleCompContainer">
        <Header />
        <SearchBarTop />
      </div>
      </div>
    );
  }
}

export default App;