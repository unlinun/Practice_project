import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { createTodoData } from "../api/getData";
import { TokenContext } from "../App";

const AddTodoForm = () => {
  const [token] = useContext(TokenContext);
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const { mutate: addTodo } = useMutation(
    (newTodo) => {
      createTodoData(newTodo, token);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!text) return;
        addTodo({
          text,
        });
        setText("");
      }}
    >
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default AddTodoForm;
