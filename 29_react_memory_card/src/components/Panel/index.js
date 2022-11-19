import React from "react";
import Form from "./Form";
import Score from "./Score";
import "./index.css";

export default function Panel(props) {
  return (
    <section className="panel" id="panel">
      <Score currentScore={props.currentScore} bestScore={props.bestScore} />
      <Form {...props} />
    </section>
  );
}
