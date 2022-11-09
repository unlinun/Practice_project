import React, { Component } from "react";
import Info from "./Info";
import "./index.css";
import Education from "./Education";
import Job from "./Job";

export default class Form extends Component {
  state = {
    readOnly: false,
  };
  handleIsReadOnly = () => {
    return (e) => {
      e.preventDefault();
      this.setState({ readOnly: true });
    };
  };
  handleNotReadOnly = () => {
    return (e) => {
      e.preventDefault();
      this.setState({ readOnly: false });
    };
  };
  render() {
    const { addInfoToState, addEducationToState, addJobToState } = this.props;
    return (
      <form id="form">
        <Info addInfoToState={addInfoToState} readOnly={this.state.readOnly} />
        <Education
          addEducationToState={addEducationToState}
          readOnly={this.state.readOnly}
        />
        <Job addJobToState={addJobToState} readOnly={this.state.readOnly} />
        <button
          type="button"
          className="form__btn form__btn--edit"
          onClick={this.handleNotReadOnly()}
        >
          Edit
        </button>
        <button
          type="button"
          className="form__btn form__btn--submit"
          onClick={this.handleIsReadOnly()}
        >
          Save and send
        </button>
      </form>
    );
  }
}
