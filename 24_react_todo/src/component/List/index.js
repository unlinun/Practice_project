import React, { Component } from "react";
import Item from "../Item";
import "./index.css";

export default class List extends Component {
  render() {
    const { todoItems, updateTodo, deleteTodo } = this.props;
    return (
      <ul className="todo-main">
        {todoItems.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
