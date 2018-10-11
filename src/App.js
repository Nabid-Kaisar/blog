import React, { Component } from 'react';
import Header from "./Header.js"
import SearchBarTop from "./SearchBarTop"
import './App.css';
import NavBar from "./NavBar"
import Writing from "./Writing"

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

      <div className = "writingCompContainer">
        <div className="card"><Writing name = "kaisar" type = "science" time ="10:10:10pm" mainWriting ="Hello World"/></div>
        <div className="card"><Writing name = "kaisar2" type = "science" time ="10:10:10pm" mainWriting ="Hello World2222222222"/></div>
        <div className="card"><Writing name = "kaisar3" type = "science" time ="10:10:10pm" mainWriting ="Hello World33333333333333333"/></div>
        <div className="card"><Writing name = "kaisar4" type = "science" time ="10:10:10pm" mainWriting ="Hello World4444444444444444222222"/></div>
        <div><Writing name = "kaisar5" type = "science" time ="10:10:10pm" mainWriting ="Hello World55555555555555555555555  "/></div>
      </div>
      </div>
    );
  }
}

export default App;
