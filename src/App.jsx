import styles from "./App.module.css";
import { Link, Outlet } from "react-router-dom";

export default function App() {
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
      <Outlet />
    </>
  );
}
