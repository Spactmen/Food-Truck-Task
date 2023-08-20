import Image from 'next/image'
import styles from '../styles/HeroSection.module.css'
import heroimg from "../public/assests/heroimg.jpeg"
import logo from "../public/assests/logo.png"
import HeroSection from '../components/HeroSection'
import AboutUs from '../components/AboutUs'
import LatestArticles from '../components/LatestArticles'
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className={styles.main}>
      <HeroSection></HeroSection>

      <AboutUs></AboutUs>

      <LatestArticles></LatestArticles>

      <Footer></Footer>
    </div>

  )
}
