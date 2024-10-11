import { useOutletContext } from "react-router-dom";
import styles from "./Table.module.css";
export default function Table() {
  const [tasks, setTasks] = useOutletContext();
  const data = tasks.slice(0, 2);
  return (
    <div className={styles.table} data-testid="table">
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Finished?</th>
          </tr>
        </thead>
        <tbody>
          {data.map((task, index) => (
            <tr key={index}>
              <td>{task.name}</td>
              <td>{task.completed ? "True" : "False"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
