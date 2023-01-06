import React from "react";
import { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { updateTodoData, deleteTodoData } from "../api/getData";
import { TokenContext } from "../App";

const TodoItems = ({ todo }) => {
  const [token] = useContext(TokenContext);
  const queryClient = useQueryClient();
  const { mutate: updateTodo } = useMutation(
    (updateTodo) => {
      return updateTodoData(updateTodo, token);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );

  const { mutate: deleteTodo } = useMutation(
    (deleteTodo) => {
      return deleteTodoData(deleteTodo, token);
    },
    {
      onSettled: () => {
        queryClient.invalidateQueries("todos");
      },
    }
  );
  return (
    <div className="todo-item">
      <input
        checked={todo.completed}
        type="checkbox"
        onChange={() =>
          updateTodo({
            ...todo,
            completed: !todo.completed,
          })
        }
      />
      <input
        value={todo.text}
        type="text"
        onChange={(e) =>
          updateTodo({
            ...todo,
            text: e.target.value,
          })
        }
      />
      <button onClick={() => deleteTodo(todo)}>delete</button>
    </div>
  );
};

export default TodoItems;
