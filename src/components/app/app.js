import React, { Component } from "react";
import Header from "../header";
import { CustomerPage } from "../pages";
import './app.css';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <CustomerPage />
      </div>
    )
  }
};