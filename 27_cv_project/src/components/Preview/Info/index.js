import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <section className="preview__info">
        <h3 className="preview__title">User Info</h3>
        <div className="preview__user">
          <div className="preview__text">
            <span>name: </span>-
          </div>
          <div className="preview__text">
            <span>birthday: </span>-
          </div>
          <div className="preview__text">
            <span>phone: </span>-
          </div>
          <div className="preview__text">
            <span>address: </span>-
          </div>
        </div>
        <div className="preview__avatar">
          <img src="" alt="" />
        </div>
        <div className="preview__description">
          <div className="preview__text">
            <span>description: </span>-
          </div>
        </div>
      </section>
    );
  }
}
