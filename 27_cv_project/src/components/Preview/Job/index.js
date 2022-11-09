import React, { Component } from "react";

export default class Job extends Component {
  render() {
    const { job } = this.props;
    console.log(job);
    return (
      <section className="preview__job">
        <h3 className="preview__title">User job experience</h3>
        {job
          ? job.map((item) => {
              return (
                <div className="job__item" key={item.id}>
                  <div className="preview__text">
                    <span>company: </span>
                    {item.company}
                  </div>
                  <div className="preview__text">
                    <span>position: </span>
                    {item.position}
                  </div>
                  <div className="preview__text">
                    <span>year: </span>From {item.from} To {item.to}
                  </div>
                </div>
              );
            })
          : ""}
      </section>
    );
  }
}
