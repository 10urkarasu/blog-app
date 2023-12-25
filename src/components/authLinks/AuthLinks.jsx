"use client";
import { React, useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const status = "noauthenticated";
  return (
    <>
      {status === "noauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Giriş
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Blog Yaz
          </Link>
          <span className={styles.link}>Çıkış Yap</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Anasayfa</Link>
          <Link href="/">İletişim</Link>
          <Link href="/">Hakkında</Link>
          {status === "noauthenticated" ? (
            <Link href="/login">Giriş</Link>
          ) : (
            <>
              <Link href="/write">Blog Yaz</Link>
              <span className={styles.link}>Çıkış Yap</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
