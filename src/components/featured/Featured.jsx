import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>DevBlog'a hoşgeldiniz! </b>Blog yazılarını inceleyin ve yaratıcı fikirler edinin. 
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" fill className={styles.image}/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDesc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Modi necessitatibus porro nam ipsa sed non, numquam dolore 
            eaque fuga at nisi animi incidunt amet et, esse commodi eos 
            reprehenderit cupiditate?
          </p>
          <button className={styles.button}>Devamını Oku</button>
        </div>
      </div>
    </div>
  )
}

export default Featured