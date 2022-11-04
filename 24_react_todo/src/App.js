import React, { Component } from "react";
import "./App.css";
import Header from "./component/Header";
import List from "./component/List";
import Footer from "./component/Footer";

export default class App extends Component {
  state = {
    todoItems: [
      { id: "01", name: "吃飯", done: true },
      { id: "02", name: "睡覺", done: true },
      { id: "03", name: "洗澡", done: false },
      { id: "04", name: "吹髮", done: false },
    ],
  };
  addTodo = (todoItem) => {
    const { todoItems } = this.state;
    const newTodo = [todoItem, ...todoItems];
    this.setState({ todoItems: newTodo });
  };
  render() {
    const { todoItems } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header addTodo={this.addTodo} />
          <List todoItems={todoItems} />
          <Footer />
        </div>
      </div>
    );
  }
}
