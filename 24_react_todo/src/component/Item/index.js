import React, { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = {
    isHover: false,
  };
  mouseHover = (mouse) => {
    return () => {
      this.setState({ isHover: mouse });
    };
  };
  render() {
    const { name, done } = this.props;
    return (
      <li
        onMouseEnter={this.mouseHover(true)}
        onMouseLeave={this.mouseHover(false)}
        style={{ backgroundColor: this.state.isHover ? "#ddd" : "#fff" }}
      >
        <label>
          <input type="checkbox" defaultChecked={done} />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: this.state.isHover ? "block" : "none" }}
        >
          删除
        </button>
      </li>
    );
  }
}
