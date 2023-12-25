import React from "react";
import styles from "./loginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton}>Google ile giriş yap</div>
        <div className={styles.socialButton}>Github ile giriş yap</div>
        <div className={styles.socialButton}>Facebook ile giriş yap</div>
      </div>
    </div>
  );
};

export default LoginPage;
