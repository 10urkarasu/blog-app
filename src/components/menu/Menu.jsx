import React from 'react'
import styles from './menu.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Gündemdekiler</h2>
      <h1 className={styles.title}>En Popüler</h1>
      <MenuPosts/>
      <h2 className={styles.subtitle}>Öne Çıkanları Keşfet</h2>
      <h1 className={styles.title}>Categories</h1>
      <MenuCategories/>
      <h2 className={styles.subtitle}>Editör Tarafından Seçilmiş</h2>
      <h1 className={styles.title}>Editörün Seçimi</h1>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu 