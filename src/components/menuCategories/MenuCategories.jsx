import React from 'react'
import Link from 'next/link'
import styles from './menuCategories.module.css'

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.style}`}>Stil</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.fashion}`}>Moda</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.food}`}>Yemek</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.travel}`}>Seyahat</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.culture}`}>Kültür</Link>
        <Link href="/blog?cat=style" className={`${styles.categoryItem} ${styles.coding}`}>Yazılım</Link>
      </div>
  )
}

export default MenuCategories