import React, { Component } from "react";

export default class Job extends Component {
  render() {
    return (
      <section className="preview__job">
        <h3 className="preview__title">User job experience</h3>
        <div className="job__item">
          <div className="preview__text">
            <span>compony: </span>-
          </div>
          <div className="preview__text">
            <span>position: </span>-
          </div>
          <div className="preview__text">
            <span>year: </span>-
          </div>
        </div>
      </section>
    );
  }
}
