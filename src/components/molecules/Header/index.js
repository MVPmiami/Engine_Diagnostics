import React from "react";
import styles from "./style.module.scss";
import mail from "./../../../assets/img/mail.png";
import logo from "./../../../assets/img/logo.png";
import phone from "./../../../assets/img/phone.png";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.headerWrapper}>
        <div className={styles.menuWrapper}>
          <div className={styles.burgerMenu}></div>
          <img src={logo} alt="logo" className={styles.logo}></img>
        </div>
        <div className={styles.contactsWrapper}>
          <div className={styles.email}>
            <p className={styles.text}>Пишите нам на email</p>
            <div className={styles.adressWpapper}>
              <img src={mail} alt="email"></img>
              <p className={styles.mailName}>info@diagnistics.by</p>
            </div>
          </div>
          <div className={styles.phoneWrapper}>
            <div className={styles.textWrapper}>
              <img src={phone} alt="phone" className={styles.phoneImg}></img>
              <p className={styles.text}>Есть вопросы? Звоните!</p>
            </div>
            <div className={styles.phoneNum}>+375 (29) 456-45-45</div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
