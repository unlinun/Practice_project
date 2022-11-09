import React, { Component } from "react";

export default class Info extends Component {
  render() {
    const { name, birthday, avatar, phone, address, description } =
      this.props.info;
    return (
      <section className="preview__info">
        <h3 className="preview__title">User Info</h3>
        <div className="preview__user">
          <div className="preview__text">
            <span>name: </span> {name}
          </div>
          <div className="preview__text">
            <span>birthday: </span>
            {birthday}
          </div>
          <div className="preview__text">
            <span>phone: </span>
            {phone}
          </div>
          <div className="preview__text">
            <span>address: </span>
            {address}
          </div>
        </div>
        <div className="preview__avatar">
          <img
            src={
              avatar
                ? avatar
                : "https://icons-for-free.com/iconfiles/png/512/person-1324760545186718018.png"
            }
            alt="Avatar"
          />
        </div>
        <div className="preview__description">
          <div className="preview__text">
            <span>description: </span>
            <br />
            {description}
          </div>
        </div>
      </section>
    );
  }
}
