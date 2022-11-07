import React, { Component } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import List from "./component/List";
import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: "001", title: "Wake up", done: false, edit: false },
      { id: "002", title: "Go to bed", done: true, edit: false },
      { id: "003", title: "Reading", done: false, edit: false },
    ],
    edit: false,
  };
  // ADD new todo
  addTodo = (todoObj) => {
    if (this.state.edit) return;
    const { todoList } = this.state;
    const newTodo = [todoObj, ...todoList];
    this.setState({ todoList: newTodo });
  };

  // check todo
  checkTodo = (id) => {
    const { todoList } = this.state;
    const newTodo = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      } else {
        return todo;
      }
    });
    this.setState({ todoList: newTodo });
  };

  // delete todo
  deleteTodo = (id) => {
    const { todoList } = this.state;
    const newTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todoList: newTodo });
  };

  editTodo = (id) => {
    const { todoList } = this.state;
    const newTodo = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, edit: !todo.edit };
      } else {
        return todo;
      }
    });
    this.setState({ todoList: newTodo });
  };
  addEditTodo = (id, value) => {
    const { todoList } = this.state;
    const newTodo = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: value };
      } else {
        return todo;
      }
    });
    this.setState({ todoList: newTodo });
  };
  //checkAllTodo
  checkAllTodo = (done) => {
    const { todoList } = this.state;
    const newTodo = todoList.map((todo) => {
      return { ...todo, done };
    });
    this.setState({ todoList: newTodo });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="container">
        <Header addTodo={this.addTodo} />
        <List
          todoList={todoList}
          checkTodo={this.checkTodo}
          deleteTodo={this.deleteTodo}
          editTodo={this.editTodo}
          addEditTodo={this.addEditTodo}
        />
        <Footer todoList={todoList} checkAllTodo={this.checkAllTodo} />
      </div>
    );
  }
}
