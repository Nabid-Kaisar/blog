import React, { Component } from 'react';
import Header from "./Header.js"
import SearchBarTop from "./SearchBarTop"
import './App.css';
import NavBar from "./NavBar"
import Writing from "./Writing"

class App extends Component {
  render() {
    return (
      <div className= "bgcol">
      <div className= "bgcol">
      <div className="titleCompContainer">
        <Header />
        <SearchBarTop />
      </div>
      </div>
      <div className="navBar">
      <NavBar/>
      </div>

      <div className = "writingCompContainer">
        <div className="card"><Writing blogName="post1" name = "kaisar" type = "science" time ="10:10:10pm" mainWriting ="Hello World"/></div>
        <div className="card"><Writing blogName="post2" name = "kaisar2" type = "science" time ="10:10:10pm" mainWriting ="Hello World2222222222"/></div>
        <div className="card3"><Writing blogName="post3" name = "kaisar3" type = "science" time ="10:10:10pm" mainWriting ="Hello World33333333333333333"/></div>
        <div className="card"><Writing blogName="post4" name = "kaisar4" type = "science" time ="10:10:10pm" mainWriting ="Hello World4444444444444444222222"/></div>
        <div className="card"><Writing blogName="post5" name = "kaisar5" type = "science" time ="10:10:10pm" mainWriting ="Hello World55555555555555555555555  "/></div>
        <div className="card6"><Writing blogName="post6" name = "kaisar6" type = "science" time  ="10:10:10pm" mainWriting ="Hello World55555555555555555555555232323  "/></div>
      </div>
      </div>
    );
  }
}

export default App;
