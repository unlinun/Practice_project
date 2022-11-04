import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

export default class Header extends Component {
  handleSubmit = (e) => {
    const keyCode = e.keyCode;
    const value = e.target.value;
    if (keyCode !== 13) return;
    if (value.trim() === "") {
      return alert(`Can't not use empty string`);
    }
    const todoObj = { id: nanoid(), name: value, done: false };
    this.props.addTodo(todoObj);
    e.target.value = "";
  };
  render() {
    return (
      <div className="todo-header">
        <input
          onKeyUp={this.handleSubmit}
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
        />
      </div>
    );
  }
}
