"use client";
import React, {useState} from "react";
import styles from "./TrendingSlider.module.css";

const TrendingSlider = () => {
    const imagesItems = [

        {
            id: 2,
            img: "https://www.worldanimalprotection.org.nz/sites/default/files/styles/600x400/public/media/smacc-monkey.jpg?h=e88642a1&itok=JlwOs4DK",
        },
        {
            id: 1,
            img: "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg",
        },
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const changeNextImage = () => {
        if(currentImageIndex < imagesItems.length -1 ){
            console.log(currentImageIndex)
            setCurrentImageIndex(currentImageIndex+1)
        }
    }
    const changePreviousImage = () => {
        if (currentImageIndex >0) {
            setTimeout(()=> {
                setCurrentImageIndex(prevState => prevState - 1)
            }, 200)
        }
    }

    return (
        <>
            <div className={styles.slider_container}>
                <div className={styles.side_button} onClick={changePreviousImage}>
                    <div>
                        icon
                    </div>
                </div>
                <div className={styles.image_container}>
                    <img src={imagesItems[currentImageIndex].img} alt=""/>
                </div>
                <div className={styles.side_button} onClick={changeNextImage}>
                    <div>
                        icon
                    </div>
                </div>
            </div>
        </>
    );
};
export default TrendingSlider;
