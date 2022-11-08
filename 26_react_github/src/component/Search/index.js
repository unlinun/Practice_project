import React, { Component } from "react";
import axios from "axios";

export default class Search extends Component {
  getAPISearch = () => {
    const {
      keyElement: { value: keyWord },
    } = this;
    this.props.updateAppState({ isFirst: false, isLoading: true });
    axios
      .get(`http://localhost:3000/search/users?q=${keyWord}`)
      .then((res) => {
        this.props.updateAppState({ isLoading: false, users: res.data.items });
      })
      .catch((err) => {
        this.props.updateAppState({ isLoading: false, error: err.message });
      });
  };
  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={(c) => (this.keyElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.getAPISearch}>Search</button>
        </div>
      </section>
    );
  }
}
