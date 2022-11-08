import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div className="form__info">
        <h3 className="form__title">Your information</h3>
        <div className="form__input">
          <label htmlFor="name" className="form__label">
            name
          </label>
          <input type="text" name="name" id="name" />
        </div>
        <div className="form__input">
          <label htmlFor="avatar" className="form__label">
            avatar
          </label>
          <input type="file" name="avatar" id="avatar" />
        </div>
        <div className="form__input">
          <label htmlFor="birthday" className="form__label">
            birthday
          </label>
          <input type="date" name="birthday" id="birthday" />
        </div>
        <div className="form__input">
          <label htmlFor="phone" className="form__label">
            phone
          </label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div className="form__input">
          <label htmlFor="address" className="form__label">
            address
          </label>
          <input type="text" name="address" id="address" />
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
          ></textarea>
        </div>
      </div>
    );
  }
}
