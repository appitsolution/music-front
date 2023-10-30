import React from "react";
import styles from "./style.module.css";

const TextInput = ({
  value = "",
  setValue,
  title = "",
  placeholder = "",
  error = false,
  style = {},
}) => {
  return (
    <div className={styles.block} style={style}>
      <label className={styles.label}>
        <p className={styles.title}>{title}</p>
        <input
          style={{ borderColor: error ? "#FB1E1E" : "transparent" }}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />

        {error ? <p className={styles.error}>!</p> : <></>}
      </label>
    </div>
  );
};

export default TextInput;
