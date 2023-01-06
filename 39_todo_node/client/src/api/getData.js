import axios from "axios";
const API_URL = "http://localhost:5001";

//  GET DATA
export const getTodoData = async (auth) => {
  return await axios
    .get(`${API_URL}/todos`, {
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      return res.data;
    });
};

// UPDATE TODO
export const updateTodoData = async (todo, auth) => {
  return await axios
    .patch(
      `${API_URL}/todos/${todo._id}`,
      {
        text: todo.text,
        completed: todo.completed,
      },
      {
        headers: {
          Authorization: `Bearer ${auth}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      return res.data;
    });
};

// DELETE TODO
export const deleteTodoData = async (todo, auth) => {
  return await axios.delete(`${API_URL}/todos/${todo._id}`, {
    headers: {
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    },
  });
};

// CREATE TODO => 使用 post
export const createTodoData = async (todo, auth) => {
  return await axios.post(
    `${API_URL}/todos/`,
    {
      text: todo.text,
    },
    {
      headers: {
        Authorization: `Bearer ${auth}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// LOGIN => 使用 post!
export const loginUser = async (password) => {
  return await axios
    .post(
      `${API_URL}/login`,
      {
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      if (res.status === 200) {
        return res.data;
      } else {
        throw new Error("Login fail");
      }
    });
};
