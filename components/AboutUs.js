import React from 'react'
import Image from 'next/image'
import aboutImage from '../public/assests/aboutimg.jpeg'
import styles from "../styles/About.module.css"

const AboutUs = () => {
  return (
    <section className={styles.about}>
      <div className={styles.about_container}>
        <div className={styles.about_img_div}>
          <Image src={aboutImage} alt="About Image" className={styles.about_image}></Image>
        </div>
        <div className={styles.about_data}>
          <h2>About US</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
          <button>Read More</button>
        </div>
      </div>
    </section>
  )
}

export default AboutUs