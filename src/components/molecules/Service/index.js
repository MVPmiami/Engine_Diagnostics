import React from "react";
import styles from "./style.module.scss";

const Service = ({ img, title, text }) => {
  return (
    <div className={styles.serviceWrapper}>
      <img src={img}></img>
      <div className={styles.contentWrapper}>
        <h2 className={styles.serviceHeader}>{title}</h2>
        <p className={styles.serviceText}>{text}</p>
      </div>
      <button className={styles.serviceBtn}>Подробнее</button>
    </div>
  );
};

export default Service;
