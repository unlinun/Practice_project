import React, { Component } from "react";

export default class Education extends Component {
  render() {
    return (
      <div className="form__education">
        <h3 className="form__title">Your education</h3>
        <div className="form__input">
          <label htmlFor="school" className="form__label">
            school
          </label>
          <input type="text" name="school" id="school" />
        </div>
        <div className="form__input">
          <label htmlFor="from__year" className="form__label">
            from
          </label>
          <input type="date" name="from__year" id="from__year" />
        </div>
        <div className="form__input">
          <label htmlFor="to__year" className="form__label">
            to
          </label>
          <input type="date" name="to__year" id="to__year" />
        </div>
        <button type="button" className="form__btn form__btn--education">
          add education
        </button>
      </div>
    );
  }
}
