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

  // edit
  handleEdit = (id) => {
    return () => {
      this.props.editTodo(id);
    };
  };

  // new Edit
  handleNewEdit = (id) => {
    return (e) => {
      this.props.addEditTodo(id, e.target.value);
    };
  };

  render() {
    const { id, title, done, edit } = this.props;
    return (
      <div className="list__item">
        <input
          type="checkbox"
          name="item__check"
          id="item__check"
          checked={done ? true : false}
          onChange={this.handleChecked(id)}
        />
        {edit ? (
          <input
            type="text"
            defaultValue={title}
            onChange={this.handleNewEdit(id)}
          />
        ) : (
          <p className="item__title">{title}</p>
        )}
        <div className="item__btns">
          <button
            type="button"
            className="item__btn item__btn--edit"
            onClick={this.handleEdit(id)}
          >
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
