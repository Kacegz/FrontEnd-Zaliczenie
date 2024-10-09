import styles from "./Table.module.css";
export default function Table() {
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
          <tr>
            <td>Laundry</td>
            <td>True</td>
          </tr>
          <tr>
            <td>Grocery</td>
            <td>false</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
