import React, { Component } from "react";
import { nanoid } from "nanoid";
import swal from "sweetalert";
import "./index.css";

export default class Header extends Component {
  handleAddTodo = (e) => {
    let input = e.target.value;
    const todoObj = {
      title: input,
      id: nanoid(),
      done: false,
      edit: false,
    };
    if (e.keyCode !== 13) return;
    if (input.trim() === "") {
      swal({
        title: "Wait!",
        text: "Input can't be empty!",
        icon: "error",
      });
    }
    if (e.keyCode === 13 && input.trim() !== "") {
      this.props.addTodo(todoObj);
      swal({
        title: "Success",
        text: "Added a new todo",
        icon: "success",
      });
    }
    e.target.value = "";
  };
  render() {
    return (
      <div className="header">
        <p className="header__title">To Do List</p>
        <input
          type="text"
          name="header__input"
          id="header__input"
          placeholder="Press enter to add new todo"
          onKeyUp={this.handleAddTodo}
        />
      </div>
    );
  }
}
