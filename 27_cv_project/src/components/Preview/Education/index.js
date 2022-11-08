import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <section className="preview__education">
        <h3 className="preview__title">User education</h3>
        <div className="education__item">
          <div className="preview__text">
            <span>school: </span>-
          </div>
          <div className="preview__text">
            <span>year: </span>-
          </div>
        </div>
      </section>
    );
  }
}
