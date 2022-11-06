import React, { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  handleCheckAll = (e) => {
    this.props.checkAllTodo(e.target.checked);
  };
  handleClearAllDone = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todoItems } = this.props;
    const doneItems = todoItems.reduce(
      (pre, todo) => (todo.done ? pre + 1 : pre + 0),
      0
    );
    const totalLength = todoItems.length;
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={
              doneItems === totalLength && todoItems.length > 0 ? true : false
            }
            onChange={this.handleCheckAll}
          />
        </label>
        <span>
          <span>已完成{doneItems}</span> / 全部{totalLength}
        </span>
        <button className="btn btn-danger" onClick={this.handleClearAllDone}>
          清除已完成任务
        </button>
      </div>
    );
  }
}
