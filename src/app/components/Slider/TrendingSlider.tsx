"use client";
import Link from "next/link";
import React from "react";
import {AiOutlineArrowRight, AiOutlineArrowLeft} from "react-icons/ai";
import "./TrendingSlider.css";

const TrendingSlider = () => {
    const filteredItems = [
        {
            id: 1,
            img: "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg",
        },
        {
            id: 2,
            img: "https://cdn.britannica.com/06/150806-050-6AE99C98/Proboscis-monkey.jpg",
        },
        {
            id: 3,
            img: "https://www.worldanimalprotection.org.nz/sites/default/files/styles/600x400/public/media/smacc-monkey.jpg?h=e88642a1&itok=JlwOs4DK",
        },
        {
            id: 4,
            img: "https://www.worldanimalprotection.org.nz/sites/default/files/styles/600x400/public/media/smacc-monkey.jpg?h=e88642a1&itok=JlwOs4DK",
        },
        {
            id: 5,
            img: "https://www.worldanimalprotection.org.nz/sites/default/files/styles/600x400/public/media/smacc-monkey.jpg?h=e88642a1&itok=JlwOs4DK",
        },
        {
            id: 6,
            img: "https://www.worldanimalprotection.org.nz/sites/default/files/styles/600x400/public/media/smacc-monkey.jpg?h=e88642a1&itok=JlwOs4DK",
        },
        {
            id: 7,
            img: "https://www.worldanimalprotection.org.nz/sites/default/files/styles/600x400/public/media/smacc-monkey.jpg?h=e88642a1&itok=JlwOs4DK",
        },
    ];

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 235;
    };

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 235;
    };
    return (
        <>
            <div className="trending">
                <div className="container">
                    <div className="title-btns">
                        <h3></h3>
                        <div className="btns">
                            <button title="scroll left" onClick={slideLeft}>
                                <AiOutlineArrowLeft/>
                            </button>
                            <button title="scroll right" onClick={slideRight}>
                                <AiOutlineArrowRight/>
                            </button>
                        </div>
                    </div>
                    <div className="row-container" id="slider">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="row-item">
                                <Link href={`/`} className="link">
                                    <div className="item-header">
                                        <img src={item.img} alt="product"/>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default TrendingSlider;