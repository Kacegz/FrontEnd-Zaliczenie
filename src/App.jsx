import { useState } from "react";
import styles from "./App.module.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className={styles.main}>hi</div>
    </>
  );
}

export default App;
