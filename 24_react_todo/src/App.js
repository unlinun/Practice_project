import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";

export default class App extends Component {
  state = {
    todoItems: [
      { id: "001", name: "吃飯", done: true },
      { id: "002", name: "睡覺", done: true },
      { id: "003", name: "洗澡", done: false },
      { id: "004", name: "吹髮", done: false },
    ],
  };
  // add a new todo item
  addTodo = (todoItem) => {
    const { todoItems } = this.state;
    const newTodo = [todoItem, ...todoItems];
    this.setState({ todoItems: newTodo });
  };

  // update todo done (true/false)
  updateTodo = (id) => {
    const { todoItems } = this.state;
    const newTodo = todoItems.map((item) => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    this.setState({ todoItems: newTodo });
  };

  // delete todo
  deleteTodo = (id) => {
    const { todoItems } = this.state;
    const newTodo = todoItems.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todoItems: newTodo });
  };

  // checkAll todo
  checkAllTodo = (done) => {
    const { todoItems } = this.state;
    const newTodo = todoItems.map((item) => {
      return { ...item, done };
    });
    this.setState({ todoItems: newTodo });
  };
  //clear all done
  clearAllDone = () => {
    const { todoItems } = this.state;
    const newTodo = todoItems.filter((item) => {
      return !item.done;
    });
    this.setState({ todoItems: newTodo });
  };
  render() {
    const { todoItems } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List
            todoItems={todoItems}
            updateTodo={this.updateTodo}
            deleteTodo={this.deleteTodo}
          />
          <Footer
            todoItems={todoItems}
            checkAllTodo={this.checkAllTodo}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
