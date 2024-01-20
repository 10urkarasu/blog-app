import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>DevBlog</h1>
        </div>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          animi expedita cumque eum mollitia porro modi eligendi necessitatibus
          quod nulla ipsum, placeat dolorum, obcaecati earum ratione, neque
          voluptatem aperiam nostrum.
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18}></Image>
          <Image src="/instagram.png" alt="" width={18} height={18}></Image>
          <Image src="/tiktok.png" alt="" width={18} height={18}></Image>
          <Image src="/youtube.png" alt="" width={18} height={18}></Image>
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Bağlantılar</span>
          <Link href="/">Anasayfa</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Hakkında</Link>
          <Link href="/">İletişim</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Etiketler</span>
          <Link href="/">Stil</Link>
          <Link href="/">Moda</Link>
          <Link href="/">Yazılım</Link>
          <Link href="/">Seyahat</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Sosyal</span>
          <Link href="/">Facebook</Link>
          <Link href="/">İnstagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
