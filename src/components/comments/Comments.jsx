import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        // Eğer kullanıcı giriş yapmışsa
        <div className={styles.write}>
          <textarea
            placeholder="Yorum yap ..."
            className={styles.input}
          ></textarea>
          <button className={styles.button}>Gönder</button>
        </div>
      ) : (
        // Eğer kullanıcı giriş yapmamışsa giriş yapma linkini göster
        <Link href="/login">Yorum yapmak için giriş yap</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>Duysal Kantarcı</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque nesciunt, cupiditate labore doloremque commodi eligendi quia
            magnam optio fugit repellat numquam voluptates cumque explicabo ab,
            pariatur beatae repudiandae eveniet.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>Duysal Kantarcı</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque nesciunt, cupiditate labore doloremque commodi eligendi quia
            magnam optio fugit repellat numquam voluptates cumque explicabo ab,
            pariatur beatae repudiandae eveniet.
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            ></Image>
            <div className={styles.userInfo}>
              <span className={styles.username}>Duysal Kantarcı</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt
            neque nesciunt, cupiditate labore doloremque commodi eligendi quia
            magnam optio fugit repellat numquam voluptates cumque explicabo ab,
            pariatur beatae repudiandae eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
