"use client"

import styles from "./TrendingSlider.module.css";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { SliderArrows } from "./SliderArrows/SliderArrows";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';



export default function TrendingSlider() {

    // Array of slide objects
    const slides = [
        { color: '#0D6DB5', description: 'Подготовка и переподготовка кадров в области промышленной робототехники, автоматизации технологических процессов, цифрового инжиниринга, компьютерного моделирования и цифровых двойников' },
        { color: '#6BB7CE', description: 'Разработка новых и иновационных технологий, образцов, изделий для областей промышлености' },
        { color: '#5AAB6F', description: 'Разработка роботехнических комплексов, уникальных захватных механизмов, специализированных транспортных систем, систем автоматизации' },
        { color: '#8A9ED1', description: 'Моделирование и анализ технологических процессов' },
        { color: '#93CBC2', description: 'Использование современных технологий в образовательном процессе' },
        { color: '#5598C6', description: 'Установка тесной связи образовательного процесса с производственным' }
    ];

    return (
        <div className={styles.slider_container}>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                centeredSlides={true}
                loop={true}
                style={{ zIndex: '1' }}
                modules={[Autoplay, EffectFade, Navigation]}
                effect={'fade'}
            >
                {
                    slides.map((element, index) => {
                        return (
                            <SwiperSlide key={index} style={{ backgroundColor: element.color }}>
                                <div className={styles.slider_item}>
                                    <div className={styles.hexagon_overlay}>
                                        <Image src={`/images/slider/slider_hexagon_${index + 1}.png`} alt="" height={224} width={198} />
                                    </div>
                                    <div className={styles.slider_item__description}>{element.description}</div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
                <SliderArrows />
            </Swiper>
        </div>
    );
};