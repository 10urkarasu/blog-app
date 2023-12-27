"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { data, status } = useSession();

  const router = useRouter();

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Google ile giriş yap
        </div>
        <div className={styles.socialButton}>Github ile giriş yap</div>
        <div className={styles.socialButton}>Facebook ile giriş yap</div>
      </div>
    </div>
  );
};

export default LoginPage;
