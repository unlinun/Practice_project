import React, { Component } from "react";
import PubSub from "pubsub-js";
import axios from "axios";

export default class Search extends Component {
  getAPISearch = () => {
    const {
      keyElement: { value: keyWord },
    } = this;
    PubSub.publish("listItem", { isFirst: false, isLoading: true });
    axios
      .get(`https://api.github.com/search/users?q=${keyWord}`)
      .then((res) => {
        PubSub.publish("listItem", { isLoading: false, users: res.data.items });
      })
      .catch((err) => {
        PubSub.publish("listItem", { isLoading: false, error: err.message });
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
