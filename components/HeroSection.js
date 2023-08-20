import React from 'react'
import heroimg from '../public/assests/heroimg.jpeg'
import logo from '../public/assests/logo.png'
import Image from 'next/image'
import styles from '../styles/HeroSection.module.css'

const HeroSection = () => {
  return (
    <section className={styles.hero_section}>
      <div className={styles.hero_data}>
        <div className={styles.logo_div}>
          <Image src={logo} alt="logo" className={styles.logo}></Image>
        </div>
        <div className={styles.flexbox}>
          <div className={styles.hero_content}>
            <h2>Discover the <span>Best</span> Food and Drinks</h2>

            <p>Naturally made Healthcare Products for the better care & support of your body.</p>

            <button>Explore Now!</button>
          </div>
        </div>
      </div>
      <div className={styles.hero_img_div}>
        <Image src={heroimg} alt="hero_image" className={styles.hero_img}></Image>
        <div className={styles.svg_div}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 752 839" fill="#E23744" preserveAspectRatio="none" className={styles.svgclass}>
            <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744" />
          </svg>
        </div>
        <button className={styles.hero_button}>Get in Touch</button>
      </div>
    </section>
  )
}

export default HeroSection