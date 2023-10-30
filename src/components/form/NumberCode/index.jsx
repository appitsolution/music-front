import React from "react";
import styles from "./style.module.css";

const NumberCode = () => {
  return (
    <div className={styles.block}>
      <input className={styles.input1} type="tel" maxLength={1} />
      <input className={styles.input2} type="tel" maxLength={1} />
      <input className={styles.input3} type="tel" maxLength={1} />
      <input className={styles.input4} type="tel" maxLength={1} />
    </div>
  );
};

export default NumberCode;
