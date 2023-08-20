import React from 'react'
import styles from "../styles/LatestArticles.module.css"
import Carousel from './Carousel'
import slider1 from '../public/assests/slider1.jpeg'
import slider2 from '../public/assests/slider2.jpeg'
import slider3 from '../public/assests/slider3.jpeg'
import slider4 from '../public/assests/slider4.jpeg'
import slider5 from '../public/assests/slider5.jpeg'
import slider6 from '../public/assests/slider6.jpeg'

const LatestArticles = () => {
    const data = [
        {
            image: slider1,
            title: "Grilled  Tomatoes at Home",
            bio: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            link: "https://google.com",
        },
        {
            image: slider2,
            title: "Snacks for Travel",
            bio: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            link: "https://google.com",
        },
        {
            image: slider3,
            title: "Post-workout Recipes",
            bio: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            link: "https://google.com",
        },
        {
            image: slider4,
            title: "How To Grill Corn",
            bio: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            link: "https://google.com",
        },
        {
            image: slider5,
            title: "Crunchwrap Supreme",
            bio: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            link: "https://google.com",
        },
        {
            image: slider6,
            title: "Broccoli Cheese Soup",
            bio: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
            link: "https://google.com",
        },
    ]
    return (
        <section>
            <div className={styles.articles_container}>
                <h2>Latest Articles</h2>
                <Carousel data={data}></Carousel>
            </div>
        </section>
    )
}

export default LatestArticles