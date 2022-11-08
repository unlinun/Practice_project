import React, { Component } from "react";
import "./index.css";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, error } = this.props;
    return (
      <div className="row">
        {
          //使用三元表達式來做判斷
          isFirst ? (
            <h2>Please enter text to search</h2>
          ) : isLoading ? (
            <h2>Loading ...</h2>
          ) : error ? (
            <h2>{error}</h2>
          ) : (
            users.map((user) => {
              return (
                <div className="card" key={user.id}>
                  <a href={user.html_url} target="_blank" rel="noreferrer">
                    <img
                      alt={user.login}
                      src={user.avatar_url}
                      style={{ width: "100px" }}
                    />
                  </a>
                  <p className="card-text">{user.login}</p>
                </div>
              );
            })
          )
        }
      </div>
    );
  }
}
