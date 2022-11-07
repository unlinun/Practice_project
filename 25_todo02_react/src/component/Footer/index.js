import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  render() {
    const { todoList } = this.props;
    const doneTodo = todoList.reduce((pre, todo) => {
      return todo.done ? pre + 1 : pre + 0;
    }, 0);
    const todoLength = todoList.length;
    return (
      <footer className="footer">
        <input
          type="checkbox"
          name="footer__check"
          id="footer__check"
          checked={todoLength > 0 && doneTodo === todoLength ? true : false}
          onChange={this.handleCheckAll}
        />
        <p className="footer__todo">
          已完成 {doneTodo} / <span>全部 {todoLength}</span>
        </p>
      </footer>
    );
  }
}
