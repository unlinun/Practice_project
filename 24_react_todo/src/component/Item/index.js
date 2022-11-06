import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    isHover: false,
  };
  // 滑鼠的 hover 效果
  handleMouse = (mouse) => {
    return () => {
      this.setState({ isHover: mouse });
    };
  };
  // 當 check 框被點擊時,將改變的狀態回傳給 App
  handleChecked = (id) => {
    return () => {
      this.props.updateTodo(id);
    };
  };
  // 當刪除按鈕被點擊時，將刪除的 id 傳給 App
  handleDelete = (id) => {
    return () => {
      if (window.confirm("Delete?")) {
        this.props.deleteTodo(id);
      }
    };
  };

  render() {
    const { id, name, done } = this.props;
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: this.state.isHover ? "#ddd" : "#fff" }}
      >
        <label>
          <input
            type="checkbox"
            checked={done}
            onChange={this.handleChecked(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.isHover ? "block" : "none" }}
          onClick={this.handleDelete(id)}
        >
          删除
        </button>
      </li>
    );
  }
}
