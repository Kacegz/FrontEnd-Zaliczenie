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

  function addNewTask() {
    const newTask = {
      id: tasks.length + 1,
      name: name,
      completed: false,
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
      <div className={styles.header}>ToDo App</div>
      <div className={styles.main}>
        {tasks.map((task) => (
          <div key={task.id} className={styles.task}>
            <span>{task.name}</span>
            <input
              type="checkbox"
              defaultChecked={task.completed}
              onClick={() => changeTaskStatus(task.id)}
            />
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        <button
          className={styles.addTask}
          onClick={() => dialog.current.showModal()}
        >
          +
        </button>
      </div>
      <dialog ref={dialog} className={styles.modal}>
        <div className={styles.modal_inputs}>
          <label htmlFor="name">Enter the name for new task</label>
          <input
            type="text"
            name="name"
            id=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className={styles.modal_buttons}>
            <button onClick={() => addNewTask()}>Add</button>
            <button onClick={() => dialog.current.close()}>Cancel</button>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default App;
