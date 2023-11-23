import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/p1.jpeg' fill className={styles.image}></Image>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.08.2023 -</span>
                    <span className={styles.category}>KÜLTÜR</span>
                </div>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Consequatur iste, inventore at quaerat ratione
                    ab quos, hic libero reprehenderit laudantium
                    praesentium ipsam qui eligendi. Sit quidem modi
                    nemo laborum consectetur?
                </p>
                <Link className={styles.link} href="/">Devamını oku</Link>
            </div>
        </div>
    )
}

export default Card 