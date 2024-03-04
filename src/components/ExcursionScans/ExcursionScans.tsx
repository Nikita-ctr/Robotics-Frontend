'use client'

import dynamic from 'next/dynamic';
import styles from './ExcursionScans.module.css';
import { createRef } from 'react';

const ReactPhotoSphereViewer = dynamic(
    () =>
        import('react-photo-sphere-viewer').then(
            (mod) => mod.ReactPhotoSphereViewer
        ),
    {
        ssr: false,
    }
);

const ExcursionScans = () => {



    const images = [
        { src: '/excursion_scans/scan1.jpg', },
        { src: '/excursion_scans/scan2.jpg', },
        { src: '/excursion_scans/scan3.jpg', },
        { src: '/excursion_scans/scan4.jpg', },
    ];

    let imagePosition = 1;

    const navbarOptions = [
        {
            id: 'left-control',
            content: '<span class="material-icons">arrow_back</span>',
            onClick: (viewer: any) => {
                console.log("left ", imagePosition);

                if (imagePosition < 0 || imagePosition > 3) {
                    imagePosition = 3;
                }
                
                viewer.setPanorama(images[imagePosition--].src, { transition: false });
            }
        },
        {
            id: 'right-control',
            content: '<span class="material-icons">arrow_forward</span>',
            onClick: (viewer: any) => {
                console.log("right ", imagePosition);

                if (imagePosition < 0 || imagePosition > 3) {
                    imagePosition = 0;
                }

                viewer.setPanorama(images[imagePosition++].src, { transition: false });
            }
        },
        'zoom',
        'fullscreen',
    ]

    return (
        <div className={styles.excursion_scans_section}>
            <ReactPhotoSphereViewer src={"/excursion_scans/scan1.jpg"} height='100%' width='100%' navbar={navbarOptions} />
        </div>
    );
}

export default ExcursionScans;