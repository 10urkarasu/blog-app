import React from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

    const status = "noauthenticated"
    return (
        <>
            {status === "noauthenticated" ? (
                <Link href="/login">Giriş Yap</Link>
            ) : (
                <>
                    <Link href="/write">Blog Yaz</Link>
                    <span className={styles.link}>Çıkış Yap</span>
                </>
            )}
        </>
    )
}

export default AuthLinks