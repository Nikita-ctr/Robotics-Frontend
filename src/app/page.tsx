import image from "@/static/images/Preview.png";
import styles from "./page.module.css"
import TrendingSlider from "../../src/app/components/Slider/TrendingSlider";
import ActualCard from "@/app/components/ActualCard/ActualCard";
import act1 from "../static/images/actualcard1.png"
import act2 from "../static/images/actualcard2.png"
import act3 from "../static/images/actualcard3.png"
import act4 from "../static/images/actualcard4.png"
export default function Home() {
    return (
        <main>
            <div className={styles.main_image}>
                <div className={styles.overlay}></div>
                <p className={styles.image_text}>Industrial&nbsp;Robotics</p>
                <p className={styles.image_subtext}>Ведущая лаборатория БрГТУ в области обучения и разработки проектов
                    по автоматизации и роботизации производственных предприятий</p>
            </div>
            <div>
                <div>
                    <TrendingSlider></TrendingSlider>
                </div>
                <div className={styles.cards_container}>
                    <ActualCard image={act1.src} title={"Что нужно знать, чтобы попасть в лабораторию?"}
                                buttonText={"Читать"}/>
                    <ActualCard image={act2.src} title={"Записаться на экскурсию"} buttonText={"Читать"}/>
                    <ActualCard image={act3.src} title={"Проекты для новичков"} buttonText={"Читать"}/>
                    <ActualCard image={act4.src} title={"Есть кто в лаборатории?"} buttonText={"Читать"}/>

                </div>
            </div>
        </main>
    )
}
