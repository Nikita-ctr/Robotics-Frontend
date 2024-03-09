'use client'

import styles from './PartnersSlider.module.css';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';


const PartnersSlider = () => {

    const partners_list = [
        { image_src: '/images/partners_slider/', image_alt: 'Юкола-Инфо Брест' },
        { image_src: '/images/partners_slider/', image_alt: 'БНТП' },
        { image_src: '/images/partners_slider/', image_alt: 'Тэкса Строй' },
        { image_src: '/images/partners_slider/', image_alt: 'Розум' },
        { image_src: '/images/partners_slider/', image_alt: 'R-Pro' },
        { image_src: '/images/partners_slider/', image_alt: 'TTZ' },
    ];

    return (
        <div>
            <Swiper
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                slidesPerView={5}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation, Autoplay]}
                loop={true}
                spaceBetween={16}
                style={{
                    padding: '8px'
                }}
            >
                {
                    partners_list.map((element, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className={styles.client_image_container}>
                                    {element.image_alt}
                                    {/* <Image src={element.image_src} alt={element.image_alt} fill /> */}
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>
        </div>
    );
}

export default PartnersSlider;