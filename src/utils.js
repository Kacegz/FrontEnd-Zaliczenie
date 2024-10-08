function addNewTask(id, name, completed) {
  if (!name) {
    throw new Error("Name is required");
  }
  const newTask = {
    id: id,
    name: name,
    completed: completed,
  };
  return newTask;
}

function changeTaskStatus(tasks, id) {
  const newTasks = tasks.map((task) => {
    if (task.id === id) {
      return { ...task, completed: !task.completed };
    }
    return task;
  });
  return newTasks;
}
function deleteTask(tasks, id) {
  const newTasks = tasks.filter((task) => task.id !== id);
  return newTasks;
}
export { deleteTask, changeTaskStatus, addNewTask };
