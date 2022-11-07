import React, { Component } from "react";
import Item from "../Item";

import "./index.css";

export default class List extends Component {
  render() {
    const { todoList, checkTodo, deleteTodo } = this.props;
    return (
      <section className="todo_list list">
        {todoList.map((todo) => {
          return (
            <Item
              key={todo.id}
              {...todo}
              checkTodo={checkTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </section>
    );
  }
}
