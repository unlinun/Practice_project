import React, { Component } from "react";
import Info from "./Info";
import "./index.css";
import Education from "./Education";
import Job from "./Job";

export default class Form extends Component {
  render() {
    return (
      <form id="form">
        <Info />
        <Education />
        <Job />
        <button type="button" className="form__btn form__btn--edit">
          Edit
        </button>
        <button type="button" className="form__btn form__btn--print">
          Save as PDF
        </button>
        <button type="submit" className="form__btn form__btn--submit">
          Save and send
        </button>
      </form>
    );
  }
}
