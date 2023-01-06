import React from "react";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

import TodoItems from "../components/TodoItems";
import AddTodoForm from "../components/AddTodoForm";
import { getTodoData } from "../api/getData";
import { useContext } from "react";
import { TokenContext } from "../App";

const Todo = () => {
  const [token] = useContext(TokenContext);
  const { isLoading, data: todos } = useQuery("todos", () =>
    getTodoData(token)
  );
  return (
    <div className="App">
      <h1>MERN TODO</h1>
      {isLoading ? (
        <ClipLoader size={150} />
      ) : (
        todos.map((todo) => {
          return <TodoItems todo={todo} key={todo._id} />;
        })
      )}
      <AddTodoForm />
    </div>
  );
};

export default Todo;
