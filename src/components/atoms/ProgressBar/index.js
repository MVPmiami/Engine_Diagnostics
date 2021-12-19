import React, { useState } from "react";
import styles from "./style.module.scss";

const ProgressBar = ({ width }) => {
  return (
    <div className={styles.progressBarWrapper}>
      <div className={styles.progressDone} style={{ width: `${width}%` }}></div>
    </div>
  );
};

export default ProgressBar;
