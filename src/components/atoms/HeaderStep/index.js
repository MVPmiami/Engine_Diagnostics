import React from "react";
import styles from "./style.module.scss";

const HeaderStep = () => {
  return (
		<div className={styles.headerStepWrapper}>
			<div className={styles.headerWrapper}>
			<h2 className={styles.header}>Мы работаем в комплексе</h2>
			</div>
      <p className={styles.text}>
        чтобы Вы не тратили время на поиск и организацию множества подрядчиков
      </p>
    </div>
  );
};

export default HeaderStep;
