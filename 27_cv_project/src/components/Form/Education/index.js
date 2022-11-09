import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class Education extends Component {
  state = {
    school: "",
    from: "",
    to: "",
  };
  handleEducationState = (type) => {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  };
  handleAddEducation = () => {
    return (e) => {
      e.preventDefault();
      if (
        this.state.school === "" ||
        this.state.form === "" ||
        this.state.to === ""
      )
        return;
      const obj = { id: nanoid(), ...this.state };
      console.log(obj);
      this.props.addEducationToState(obj);
    };
  };
  render() {
    const { readOnly } = this.props;
    return (
      <div className="form__education">
        <h3 className="form__title">Your education</h3>
        <div className="form__input">
          <label htmlFor="school" className="form__label">
            school
          </label>
          <input
            type="text"
            name="school"
            id="school"
            onChange={this.handleEducationState("school")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input">
          <label htmlFor="from__year" className="form__label">
            from
          </label>
          <input
            type="date"
            name="from__year"
            id="from__year"
            onChange={this.handleEducationState("from")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input">
          <label htmlFor="to__year" className="form__label">
            to
          </label>
          <input
            type="date"
            name="to__year"
            id="to__year"
            onChange={this.handleEducationState("to")}
            readOnly={readOnly}
          />
        </div>
        <button
          type="button"
          className="form__btn form__btn--education"
          onClick={this.handleAddEducation()}
        >
          add education
        </button>
      </div>
    );
  }
}
