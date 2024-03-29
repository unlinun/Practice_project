import React, { Component } from "react";
import Education from "./Education";
import "./index.css";
import Info from "./Info";
import Job from "./Job";

export default class Preview extends Component {
  render() {
    return (
      <main id="preview">
        <Info {...this.props} />
        <Education {...this.props} />
        <Job {...this.props} />
      </main>
    );
  }
}
