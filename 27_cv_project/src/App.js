import React, { Component } from "react";
import Form from "./components/Form";
import Preview from "./components/Preview";
import "./App.css";

export default class App extends Component {
  state = {
    isEdit: true,
    isSubmit: false,
    info: {
      name: "",
      avatar: "",
      birthday: "",
      phone: "",
      address: "",
      description: "",
    },
    education: [],
    job: [],
  };
  addInfoToState = (type, value) => {
    const infoObj = this.state.info;
    infoObj[type] = value;
    this.setState({ info: infoObj });
  };
  addEducationToState = (stateObj) => {
    const educationObj = this.state.education;
    console.log(stateObj);
    educationObj.push(stateObj);
    console.log(educationObj);
    this.setState({ education: educationObj });
  };
  addJobToState = (stateObj) => {
    const jobObj = this.state.job;
    console.log(stateObj);
    jobObj.push(stateObj);
    console.log(jobObj);
    this.setState({ job: jobObj });
  };

  render() {
    return (
      <div id="container">
        <Form
          {...this.state}
          addInfoToState={this.addInfoToState}
          addEducationToState={this.addEducationToState}
          addJobToState={this.addJobToState}
        />
        <Preview {...this.state} />
      </div>
    );
  }
}
