import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Routes from "./config/routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
