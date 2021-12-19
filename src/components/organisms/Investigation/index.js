import React from "react";
import styles from "./style.module.scss";
import Header from "../../molecules/Header";
import download from "./../../../assets/img/download.png";
import firstImg from "./../../../assets/img/01.png";
import secondImg from "./../../../assets/img/02.png";
import thirdImg from "./../../../assets/img/03.png";

const Investigation = () => {
  return (
    <div className={styles.investWrapper}>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <div className={styles.descriptionWrapper}>
            <div className={styles.description}>
              <h1 className={styles.mainHeader}>
                Независимое обследование зданий и сооружений
              </h1>
              <p className={styles.descriptionText}>
                антенн, труб, теплосетей, канализаций и других объектов
                строительства
              </p>
            </div>
            <div className={styles.getform}>
              <button className={styles.button}>
                <img src={download} className={styles.btnImg}></img>
                <p>Получить коммерческое</p>
              </button>
              <p className={styles.btnDesription}>
                Отправьте техзадание и получите коммерческое предложение в
                течении 15 минут на свой email или в мессенджер
              </p>
            </div>
          </div>
          <div className={styles.conditionsWrapper}>
            <div className={styles.conditions}>
              <div className={styles.condition}>
                <img src={firstImg}></img>
                <p>Начинаем работать без аванса</p>
              </div>
              <div className={styles.condition}>
                <img src={secondImg}></img>
                <p>Предоставляем отсрочку платежа</p>
              </div>
              <div className={styles.condition}>
                <img src={thirdImg}></img>
                <p>Всегда называем справедливую цену</p>
              </div>
            </div>
						<div className={styles.video}>
							<div className={styles.photo}>
								<div className={styles.play}></div>
							</div>
						</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investigation;
