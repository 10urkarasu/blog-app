"use client";
import { React, useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Giriş
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Yaz
          </Link>
          <span className={styles.link} onClick={signOut}>
            Çıkış
          </span>
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
          {status === "unauthenticated" ? (
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
