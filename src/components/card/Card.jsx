import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      {item.img && (
        <div className={styles.imageContainer}>
          <Image src={item.img} fill className={styles.image}></Image>
        </div>
      )}
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{item.createdAt.substring(0, 10)}</span>
          <span className={styles.category}> - {item.cat}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: item.desc.substring(0, 400),
          }}
        />
        <Link className={styles.link} href={`/posts/${item.slug}`}>
          Devamını oku
        </Link>
      </div>
    </div>
  );
};

export default Card;
