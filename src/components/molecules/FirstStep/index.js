import React from "react";
import styles from "./style.module.scss";
import HeaderStep from "../../atoms/HeaderStep";
import img from "./../../../assets/img/photoSlider.png";

const FirstStep = () => {
  return (
    <div className={styles.serviceWrapper}>
      <HeaderStep />
      <div className={styles.firstStepWrapper}>
        <img src={img} alt="man working"></img>
        <div className={styles.rightSide}>
          <h2 className={styles.headerStep}>Подготовительные работы</h2>
          <p className={styles.text}>
            Мы осматриваем здание, делаем замеры и проверяем наличие визуально
            заметных дефектов: трещин, коррозии, повреждения фундамента и т.д.
          </p>
          <div className={styles.feedback}>
            <blockquote className={styles.quote}>
              “Задача этого этапа получить максимально полное представление о
              конструкции здания, условиях его эксплуатации и возможных слабых
              местах“
            </blockquote>
            <p className={styles.author}>
              АЛЕКСЕЙ, обследователь и главный инженер проектов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
