import React from "react";
import styles from "./style.module.css";
const FormContainer = ({ children, style }) => {
  return (
    <>
      <div style={style} className={styles.form}>
        {children}
      </div>
    </>
  );
};

export default FormContainer;
