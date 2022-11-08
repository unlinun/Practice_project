import React, { Component } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div id="container">
        <Form />
        <Preview />
      </div>
    );
  }
}
