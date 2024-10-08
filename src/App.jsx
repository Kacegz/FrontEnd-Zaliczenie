import React, { useRef, useState } from "react";
import styles from "./App.module.css";
import Modal from "./Modal/Modal";
import { addNewTask, changeTaskStatus, deleteTask } from "./utils";

export default function App() {
  const defaultTasks = [
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Walk the dog", completed: false },
    { id: 3, name: "Do laundry", completed: true },
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const dialog = useRef();
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);
  const id = useRef(4);

  function handleAddNewTask() {
    const newTask = addNewTask(id.current, name, completed);
    setTasks([...tasks, newTask]);
    setName("");
    id.current = id.current + 1;
    dialog.current.close();
  }
  function handleChangeStatus(id) {
    setTasks(changeTaskStatus(tasks, id));
  }
  function handleDeleteTask(id) {
    setTasks(deleteTask(tasks, id));
  }
  return (
    <>
      <div className={styles.header}>
        <h2>ToDo App</h2>
      </div>
      <div className={styles.main} data-testid="main">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.task} ${
              task.completed ? styles.finished : ""
            } task`}
          >
            <span>{task.name}</span>
            <div className={styles.task_buttons}>
              <input
                type="checkbox"
                defaultChecked={task.completed}
                className={styles.completed_button}
                onClick={() => handleChangeStatus(task.id)}
              />
              <input
                type="button"
                value="delete"
                className={styles.delete_button}
                onClick={() => handleDeleteTask(task.id)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <button
          className={styles.new_task_button}
          onClick={() => dialog.current.showModal()}
        >
          Add task
        </button>
      </div>
      <Modal
        dialog={dialog}
        setName={setName}
        name={name}
        setCompleted={setCompleted}
        completed={completed}
        handleAddNewTask={handleAddNewTask}
      />
    </>
  );
}
