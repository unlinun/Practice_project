const state = [
  {
    priority: "1",
    project: "home",
    task: "北上參加婚禮",
    time: "2022-11-05",
    trash: false,
    completed: false,
  },
  {
    priority: "2",
    project: "job",
    task: "完成 todo list",
    time: "2022-10-13",
    trash: false,
    completed: false,
  },
  {
    priority: "1",
    project: "home",
    task: "到彰化參加婚禮",
    time: "2022-10-30",
    trash: false,
    completed: false,
  },
  {
    priority: "2",
    project: "job",
    task: "完成 JS 到 60%",
    time: "2022-10-20",
    trash: false,
    completed: false,
  },
  {
    priority: "3",
    project: "home",
    task: "媽媽出去玩",
    time: "2022-11-03",
    trash: false,
    completed: false,
  },
  {
    priority: "3",
    project: "home",
    task: "確認百貨週年慶",
    time: "2022-11-25",
    trash: false,
    completed: false,
  },
];

const createNewTaskData = function (time, task, project, priority) {
  const data = {
    time,
    task,
    project,
    priority,
    completed: false,
    trash: false,
  };
  return data;
};

export const updateTaskState = function (data) {
  const newTask = createNewTaskData(
    data.time,
    data.task,
    data.project,
    data.priority
  );
  state.push(newTask);
  return state;
};
