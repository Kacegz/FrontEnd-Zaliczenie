import { useState } from "react";
import styles from "./App.module.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  const defaultTasks = [
    { id: 1, name: "Buy groceries", completed: false },
    { id: 2, name: "Walk the dog", completed: false },
    { id: 3, name: "Do laundry", completed: true },
  ];
  const [tasks, setTasks] = useState(defaultTasks);
  return (
    <>
      <div className={styles.header}>
        <h2>ToDo App</h2>
        <div className={styles.buttons}>
          <Link to="/">
            <button className={styles.button}>Tasks</button>
          </Link>
          <Link to="/gallery">
            <button className={styles.button}>Gallery</button>
          </Link>
          <Link to="/table">
            <button className={styles.button}>Table</button>
          </Link>
        </div>
      </div>
      <Outlet context={[tasks, setTasks]} />
    </>
  );
}
