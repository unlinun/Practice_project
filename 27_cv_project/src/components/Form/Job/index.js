import React, { Component } from "react";

export default class Job extends Component {
  render() {
    return (
      <div className="form__job">
        <h3 className="form__title">Your job experience</h3>
        <div className="form__input">
          <label htmlFor="compony" className="form__label">
            compony
          </label>
          <input type="text" name="compony" id="compony" />
        </div>
        <div className="form__input">
          <label htmlFor="position" className="form__label">
            position
          </label>
          <input type="text" name="position" id="position" />
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
        <button type="button" className="form__btn form__btn--job">
          add job experience
        </button>
      </div>
    );
  }
}
