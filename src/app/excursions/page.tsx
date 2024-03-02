import React from 'react';
import act4 from "../static/images/actualcard4.png"
import image from "@/static/images/Preview.png";
import styles from "@/app/page.module.css";
const Page = () => {
    return (
        <div>
            <div>
                <img src={image.src} alt={"Image not found"}/>
            </div>
            <h1 className={styles.title}>Экскурсии</h1>
            <div>
                <h3>Виртуальная экскурсия</h3>
                <div className={styles.cards_container}>


                </div>
                {/*<TrendingSlider/>*/}
            </div>
        </div>
    );
};

export default Page;