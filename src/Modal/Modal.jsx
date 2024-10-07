import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";
Modal.propTypes = {
  dialog: PropTypes.object.isRequired,
  setName: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  setCompleted: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  addNewTask: PropTypes.func.isRequired,
};
export default function Modal({
  dialog,
  setName,
  name,
  setCompleted,
  completed,
  addNewTask,
}) {
  return (
    <dialog ref={dialog} className={styles.modal} data-testid="modal">
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
          id=""
          className={styles.modal_checkbox}
          defaultChecked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
        <div className={styles.modal_buttons}>
          <button
            className={styles.modal_button}
            onClick={() => {
              addNewTask();
            }}
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
  );
}
