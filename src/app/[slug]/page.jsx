import React from "react";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className={styles.image}
              ></Image>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.userName}>Duysal Kantarcı</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}></Image>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              dolorum quam expedita voluptatem, delectus odit, minima suscipit
              reprehenderit excepturi accusantium ad ipsum perferendis eius
              error ea similique ipsa dolores quo.
            </p>
            <h2>Lorem ipsum, dolor sit amet</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              dolorum quam expedita voluptatem, delectus odit, minima suscipit
              reprehenderit excepturi accusantium ad ipsum perferendis eius
              error ea similique ipsa dolores quo.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              dolorum quam expedita voluptatem, delectus odit, minima suscipit
              reprehenderit excepturi accusantium ad ipsum perferendis eius
              error ea similique ipsa dolores quo.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments></Comments>
          </div>
        </div>
        <Menu></Menu>
      </div>
    </div>
  );
};

export default SinglePage;
