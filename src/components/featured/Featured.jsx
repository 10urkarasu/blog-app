import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>DevBlog'a hoşgeldiniz! </b>Blog yazılarını inceleyin ve yaratıcı
        fikirler edinin.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Nasıl Blog Yazarım ?</h1>
          <p className={styles.postDesc}>
            <p>DevBlog da blog yazmak çok kolay. </p>
            <p>👤 Google hesabınla giriş yap.</p>
            <p>✍️ Sağ üst köşeden yaz butonuna tıkla.</p>
            <p>🧑‍💻 Başlık ve içeriği ekle.</p>
            <p>➡️ İçeriğini fare ile seçerek düzenleyebilirsin.</p>
            <p>➡️ Bloğun için en uygun kategoriyi seçebilirsin.</p>
            <p>
              ➡️ İstediğin resmi ekleyebilir veya görsel seçimini yapay zekaya
              bırakabilirsin.🚀
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Featured;
