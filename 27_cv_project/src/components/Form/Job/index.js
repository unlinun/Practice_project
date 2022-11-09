import { nanoid } from "nanoid";
import React, { Component } from "react";

export default class Job extends Component {
  state = {
    company: "",
    position: "",
    from: "",
    to: "",
  };
  handleJobState = (type) => {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  };
  handleAddJob = () => {
    return (e) => {
      e.preventDefault();
      if (
        this.state.company === "" ||
        this.state.position === "" ||
        this.state.from === "" ||
        this.state.to === ""
      )
        return;
      const obj = { id: nanoid(), ...this.state };
      this.props.addJobToState(obj);
    };
  };
  render() {
    const { readOnly } = this.props;
    return (
      <div className="form__job">
        <h3 className="form__title">Your job experience</h3>
        <div className="form__input">
          <label htmlFor="company" className="form__label">
            company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            onChange={this.handleJobState("company")}
            readOnly={readOnly}
          />
        </div>
        <div className="form__input">
          <label htmlFor="position" className="form__label">
            position
          </label>
          <input
            type="text"
            name="position"
            id="position"
            onChange={this.handleJobState("position")}
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
            onChange={this.handleJobState("from")}
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
            onChange={this.handleJobState("to")}
            readOnly={readOnly}
          />
        </div>
        <button
          type="button"
          className="form__btn form__btn--job"
          onClick={this.handleAddJob()}
        >
          add job experience
        </button>
      </div>
    );
  }
}
