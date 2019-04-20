import React, { Component } from "react";
import Header from "../header";
import { CustomerPage, ProductPage } from "../pages";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './app.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">

          <Header />

          <Switch>
            <Route path="/" component={CustomerPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
};