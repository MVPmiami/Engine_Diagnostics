import React from "react";
import styles from "./style.module.scss";

const Whywe = () => {
  return (
    <div className={styles.WhyweWrapper}>
      <div className={styles.header}>
        <h2 className={styles.head}>
          Мы работаем быстро и наши отчеты проходят согласование с первого раза
        </h2>
        <p className={styles.text}>
          Над вашим объектом работает целая команда: <br></br>3 ГИПа (главных
          инженеров проектов) с опытом работы от 6 лет и 2 штатных сотрудника
          для камеральных работ
        </p>
      </div>
      <div className={styles.advantagesWrapper}>
        <div className={styles.listWrapper}>
          <h2 className={styles.advantagesHeader}>
            Вы и Ваши архитекторы получаете:
          </h2>
          <ul>
            <li>Отчет на который на 100% можно положиться</li>
            <li>Экономию времени и прогнозируемость сроков</li>
            <li>Предварительные результаты сразу на месте</li>
          </ul>
        </div>
      </div>
      <div className={styles.tv}></div>
    </div>
  );
};

export default Whywe;
