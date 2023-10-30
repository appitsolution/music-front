import React from "react";
import styles from "./style.module.css";

const CheckBox = ({ checked = false, setChecked, text = "", style }) => {
  return (
    <div className={styles.block} style={style}>
      <button className={styles.button} onClick={() => setChecked(!checked)}>
        <div className={styles.checkbox}>
          {checked && <div className={styles.decor}></div>}
        </div>
        <p className={styles.text}>{text}</p>
      </button>
    </div>
  );
};

export default CheckBox;
