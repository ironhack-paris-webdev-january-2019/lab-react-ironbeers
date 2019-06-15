import React, { Component } from "react";
// import logo from './logo.svg';
import "./App.css";
// import { Link } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Allbeers from "./components/Allbeers";
import Randombeer from "./components/Randombeer";
import Newbeer from "./components/Newbeer";
import Singlebeer from "./components/Singlebeer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component={Allbeers} />
          <Route exact path="/beer/:id" component={Singlebeer} />
          <Route exact path="/random-beer" component={Randombeer} />
          <Route exact path="/new-beer" component={Newbeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
