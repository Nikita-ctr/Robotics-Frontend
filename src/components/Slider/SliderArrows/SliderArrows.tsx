import styles from "./SliderArrows.module.css";
import { useSwiper } from "swiper/react";


export const SliderArrows = () => {
    const swiper = useSwiper();

    return (
        <div>
            <div className={styles.slider_contol_left} onClick={() => swiper.slidePrev()}>
                <span className={`${styles.arrow_icon} material-icons`}>arrow_back</span>
            </div>
            <div className={styles.slider_contol_right} onClick={() => swiper.slideNext()}>
                <span className={`${styles.arrow_icon} material-icons`}>arrow_forward</span>
            </div>
        </div>
    );
}