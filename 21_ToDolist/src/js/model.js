export const state = [
  // {
  //   id: "01",
  //   priority: "1",
  //   project: "home",
  //   task: "北上參加婚禮",
  //   time: {
  //     year: 2022,
  //     month: 10,
  //     date: "12",
  //     day: "SAT",
  //   },
  //   trash: false,
  //   completed: false,
  // },
  // {
  //   id: "02",
  //   priority: "2",
  //   project: "job",
  //   task: "完成 todo list",
  //   time: {
  //     year: 2022,
  //     month: 10,
  //     date: "12",
  //     day: "THU",
  //   },
  //   trash: false,
  //   completed: false,
  // },
  // {
  //   id: "03",
  //   priority: "1",
  //   project: "home",
  //   task: "到彰化參加婚禮",
  //   time: {
  //     year: 2022,
  //     month: 10,
  //     date: "30",
  //     day: "SUN",
  //   },
  //   trash: false,
  //   completed: false,
  // },
  // {
  //   id: "04",
  //   priority: "2",
  //   project: "job",
  //   task: "完成 JS 到 60%",
  //   time: {
  //     year: 2022,
  //     month: 10,
  //     date: "20",
  //     day: "THU",
  //   },
  //   trash: false,
  //   completed: false,
  // },
  // {
  //   id: "05",
  //   priority: "3",
  //   project: "home",
  //   task: "媽媽出去玩",
  //   time: {
  //     year: 2022,
  //     month: 11,
  //     date: "03",
  //     day: "THU",
  //   },
  //   trash: false,
  //   completed: false,
  // },
  // {
  //   id: "06",
  //   priority: "3",
  //   project: "home",
  //   task: "確認百貨週年慶",
  //   time: {
  //     year: 2022,
  //     month: 11,
  //     date: "30",
  //     day: "WED",
  //   },
  //   trash: false,
  //   completed: false,
  // },
];

// get time method
const weekDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const getCurrentTime = function (time) {
  const newTime = new Date(time);
  const year = newTime.getFullYear();
  const month = newTime.getMonth() + 1;
  const date =
    newTime.getDate() > 10 ? newTime.getDate() : `0${newTime.getDate()}`;
  const day = weekDay[newTime.getDay()];
  return { year, month, date, day };
};

const createNewTaskData = function (time, task, project, priority) {
  const data = {
    id: `${new Date().getTime() + 3}`,
    time,
    task,
    project,
    priority,
    completed: false,
    trash: false,
  };
  return data;
};

// when window load, get local storage
export const getStateTask = function () {
  const data = getLocalStorage();
  if (!data) return;
  state.push(...data);
  console.log(state);
  return state;
};

export const updateTaskState = function (data) {
  const newTask = createNewTaskData(
    getCurrentTime(data.time),
    data.task,
    data.project,
    data.priority
  );
  state.push(newTask);
  localStorage.clear();
  setLocalStorage(state);
  return state;
};

export const deleteTask = function (id) {
  const index = state.findIndex((task) => {
    return task.id === id;
  });
  if (state[index].trash) {
    state.splice(index, 1);
    if (state.length !== 0) {
      setLocalStorage(state);
    } else {
      localStorage.clear();
    }
  } else {
    state[index].trash = true;
    localStorage.clear();
    setLocalStorage(state);
  }
  return state;
};

export const markComplete = function (id) {
  const index = state.findIndex((task) => {
    return task.id === id;
  });
  state[index].completed = true;
  localStorage.clear();
  setLocalStorage(state);
  console.log(state);
  return state;
};

export const editTask = function (data) {
  const index = state.findIndex((task) => {
    return task.id === data.id;
  });
  state[index].time.date = +data.date > 10 ? data.date : `0${data.date}`;
  state[index].time.day = data.day;
  state[index].task = data.title;
  state[index].project = data.project;
  localStorage.clear();
  setLocalStorage(state);
  return state;
};

export const allTask = function () {
  const data = state.filter((task) => {
    if (!task.completed && !task.trash) {
      return task;
    }
  });
  return data;
};

export const todayTask = function () {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  console.log(year, month, date);
  console.log(state);
  const data = state.filter((task) => {
    if (
      task.time.year === year &&
      task.time.month === month &&
      +task.time.date === date &&
      !task.completed &&
      !task.trash
    ) {
      return task;
    }
  });
  return data;
};

export const completedTask = function () {
  const data = state.filter((task) => {
    if (task.completed) {
      return task;
    }
  });
  return data;
};

export const trashTask = function () {
  const data = state.filter((task) => {
    if (task.trash) {
      return task;
    }
  });
  console.log(data);
  return data;
};

export const projectsTask = function (project) {
  const data = state.filter((task) => {
    if (task.project === project) {
      return task;
    }
  });
  return data;
};

// setting local storage
const setLocalStorage = function (data) {
  const items = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  if (!data) return;
  data.forEach((item) => {
    items.push(item);
  });
  console.log(data);
  localStorage.setItem("tasks", JSON.stringify(items));
};
const getLocalStorage = function () {
  const items = JSON.parse(localStorage.getItem("tasks"));
  return items;
};
