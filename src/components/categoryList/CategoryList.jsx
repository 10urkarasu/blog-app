import React from 'react'
import styles from "./categoryList.module.css"
import Link from 'next/link'
import Image from 'next/image'

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popüler Kategoriler</h1>
      <div className={styles.categories}>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.style}`}>
            <Image
            src="/style.png"
            alt=''
            width={32}
            height={32}
            className={styles.image}
            />
            stil
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.fashion}`}>
            <Image
            src="/style.png"
            alt=''
            width={32}
            height={32}
            className={styles.image}
            />
            moda
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.food}`}>
            <Image
            src="/style.png"
            alt=''
            width={32}
            height={32}
            className={styles.image}
            />
            yemek
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.travel}`}>
            <Image
            src="/style.png"
            alt=''
            width={32}
            height={32}
            className={styles.image}
            />
            seyahat
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.culture}`}>
            <Image
            src="/style.png"
            alt=''
            width={32}
            height={32}
            className={styles.image}
            />
            kültür
          </Link>
          <Link href="/blog?cat=style" className={`${styles.category} ${styles.coding}`}>
            <Image
            src="/style.png"
            alt=''
            width={32}
            height={32}
            className={styles.image}
            />
            yazılım
          </Link>
      </div>
    </div>
  )
}

export default CategoryList