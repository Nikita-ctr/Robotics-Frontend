"use client"
import { useState } from 'react';
import styles from "./TrendingSlider.module.css";
import slide1 from "../../../static/images/slide1.jpg";
import slide2 from "../../../static/images/slide2.jpg";
import slide3 from "../../../static/images/slide3.jpg";
import slide4 from "../../../static/images/slide4.jpg";
import slide5 from "../../../static/images/slide5.jpg";
import slide6 from "../../../static/images/slide6.jpg";
import Image from "next/image";

export default function TrendingSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to go to the next slide
    const goToNextSlide = () => {
        // Update the current slide index
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    // Function to go to the previous slide
    const goToPreviousSlide = () => {
        // Update the current slide index
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    // Array of slide objects
    const slides = [
        { image: slide1, description: 'Подготовка и переподготовка кадров в области промышленной робототехники, автоматизации технологических процессов, цифрового инжиниринга, компьютерного моделирования и цифровых двойников' },
        { image: slide2, description: 'Разработка новых и иновационных технологий, образцов, изделий для областей промышлености' },
        { image: slide3, description: 'Разработка роботехнических комплексов, уникальных захватных механизмов, специализированных транспортных систем, систем автоматизации' },
        { image: slide4, description: 'Моделирование и анализ технологических процессов' },
        { image: slide5, description: 'Использование современных технологий в образовательном процессе' },
        { image: slide6, description: 'Установка тесной связи образовательного процесса с производственным' }
    ];

    return (
        <div className={styles.slider}>
            <button className={styles.prevButton} onClick={goToPreviousSlide}>Previous</button>
            <div className={styles.slideContainer}>
                {/* Render the slides */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentSlide ? styles.activeSlide : ''}`}
                    >


                        <Image className={styles.imageContainer} width={500} height={500} src={slide.image.src}
                               alt={"image"}/>

                        <div className={styles.textContainer}>
                            <p>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className={styles.nextButton} onClick={goToNextSlide}>Next</button>
        </div>
    );
};