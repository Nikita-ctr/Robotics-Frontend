import image from "@/static/images/Preview.png";
import styles from "./page.module.css"
import TrendingSlider from "../../src/app/components/Slider/TrendingSlider";
export default function Home() {
    return (
        <main>
            <div>
                <img src={image.src} alt={"Image not found"}/>
            </div>
            <h1 className={styles.title}>Экскурсии</h1>
            <div>
                <h3>Виртуальная экскурсия</h3>
                <TrendingSlider/>
                </div>
        </main>
    )
}
