import React, { Component } from "react";
import List from "./component/List";
import Search from "./component/Search";
import "./App.css";

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error: "",
  };
  updateAppState = (stateObj) => {
    this.setState({ ...stateObj });
  };
  render() {
    return (
      <div className="container">
        <Search updateAppState={this.updateAppState} />
        <List {...this.state} />
      </div>
    );
  }
}
