import React from "react";
import styles from "./style.module.css";

const ResponseButton = ({ onClick, style = {} }) => {
  return (
    <div className={styles.block} style={style}>
      <button className={styles.buttonTrue} onClick={() => onClick(true)}>
        YES
      </button>
      <button className={styles.buttonFalse} onClick={() => onClick(false)}>
        NO
      </button>
    </div>
  );
};

export default ResponseButton;
