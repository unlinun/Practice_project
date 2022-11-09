import React, { Component } from "react";

export default class Info extends Component {
  handleInput = (type) => {
    return (e) => {
      if (e.target.value === "") return;
      if (type === "avatar") {
        const imgUrl = window.URL.createObjectURL(e.target.files[0]);
        this.props.addInfoToState(type, imgUrl);
      } else {
        this.props.addInfoToState(type, e.target.value);
      }
    };
  };

  render() {
    const { readOnly } = this.props;
    return (
      <div className="form__info">
        <h3 className="form__title">Your information</h3>
        <div className="form__input">
          <label htmlFor="name" className="form__label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.handleInput("name")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input">
          <label htmlFor="avatar" className="form__label">
            avatar
          </label>
          <input
            type="file"
            name="avatar"
            id="avatar"
            accept="image/*"
            onChange={this.handleInput("avatar")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input">
          <label htmlFor="birthday" className="form__label">
            birthday
          </label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            onChange={this.handleInput("birthday")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input">
          <label htmlFor="phone" className="form__label">
            phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={this.handleInput("phone")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input">
          <label htmlFor="address" className="form__label">
            address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={this.handleInput("address")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input form__input--row">
          <label htmlFor="description" className="form__label">
            description
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            onChange={this.handleInput("description")}
            readOnly={readOnly}
          ></textarea>
        </div>
      </div>
    );
  }
}
