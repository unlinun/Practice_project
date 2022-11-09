import React, { Component } from "react";

export default class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <section className="preview__education">
        <h3 className="preview__title">User education</h3>
        {education
          ? education.map((item) => {
              return (
                <div className="education__item" key={item.id}>
                  <div className="preview__text">
                    <span>school: </span>
                    {item.school}
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
