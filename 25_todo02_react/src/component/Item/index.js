import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  //checked
  handleChecked = (id) => {
    return () => {
      this.props.checkTodo(id);
    };
  };

  //delete
  handleDelete = (id) => {
    return () => {
      if (window.confirm("delete?")) {
        this.props.deleteTodo(id);
      }
    };
  };
  render() {
    const { id, title, done } = this.props;
    return (
      <div className="list__item">
        <input
          type="checkbox"
          name="item__check"
          id="item__check"
          checked={done ? true : false}
          onChange={this.handleChecked(id)}
        />
        <p className="item__title">{title}</p>
        <div className="item__btns">
          <button type="button" className="item__btn item__btn--edit">
            edit
          </button>
          <button
            type="button"
            className="item__btn item__btn--delete"
            onClick={this.handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
