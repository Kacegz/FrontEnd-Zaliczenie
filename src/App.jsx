import { useRef, useState } from "react";
import styles from "./App.module.css";

function App() {
  const defaultTasks = [
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Walk the dog", completed: false },
    { id: 3, name: "Do laundry", completed: true },
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  const dialog = useRef();
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  function addNewTask() {
    if (!name) {
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      name: name,
      completed: completed,
    };
    setTasks([...tasks, newTask]);
    setName("");
    dialog.current.close();
  }
  function changeTaskStatus(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <div className={styles.header}>
        <h2>ToDo App</h2>
      </div>
      <div className={styles.main}>
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`${styles.task} ${
              task.completed ? styles.finished : ""
            }`}
          >
            <span>{task.name}</span>
            <div className={styles.task_buttons}>
              <input
                type="checkbox"
                defaultChecked={task.completed}
                className={styles.completed_button}
                onClick={() => changeTaskStatus(task.id)}
              />
              <input
                type="button"
                value="delete"
                className={styles.delete_button}
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
          Add new task
        </button>
      </div>
      <dialog ref={dialog} className={styles.modal}>
        <div className={styles.modal_inputs}>
          <label htmlFor="name">
            <h3>Enter the name for a new task</h3>
          </label>
          <input
            type="text"
            name="name"
            id=""
            className={styles.modal_input_text}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="completed">Completed?</label>
          <input
            type="checkbox"
            name="completed"
            id=""
            className={styles.modal_checkbox}
            defaultChecked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <div className={styles.modal_buttons}>
            <button
              className={styles.modal_button}
              onClick={() => addNewTask()}
            >
              Add
            </button>
            <button
              className={`${styles.modal_button} ${styles.modal_cancel}`}
              onClick={() => dialog.current.close()}
            >
              Cancel
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default App;
