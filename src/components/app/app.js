import React, { Component } from "react";
import Header from "../header";
import ItemPage from "../item-page";
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <ItemPage />
      </div>
    )
  }
};