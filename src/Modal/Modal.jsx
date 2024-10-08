import styles from "./Modal.module.css";
import PropTypes from "prop-types";
Modal.propTypes = {
  dialog: PropTypes.bool.isRequired,
  toggleDialog: PropTypes.func.isRequired,
  setName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setCompleted: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  handleAddNewTask: PropTypes.func.isRequired,
};
export default function Modal({
  dialog,
  toggleDialog,
  setName,
  name,
  setCompleted,
  completed,
  handleAddNewTask,
}) {
  return (
    dialog && (
      <div className={styles.modal} id="dialog">
        <div className={styles.modal_inputs}>
          <label htmlFor="name">
            <h3>Enter the name for a new task</h3>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className={styles.modal_input_text}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="completed">Completed?</label>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            className={styles.modal_checkbox}
            defaultChecked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          <div className={styles.modal_buttons}>
            <button
              className={styles.modal_button}
              onClick={() => {
                handleAddNewTask();
              }}
            >
              Add
            </button>
            <button
              className={`${styles.modal_button} ${styles.modal_cancel}`}
              onClick={() => toggleDialog()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
}
