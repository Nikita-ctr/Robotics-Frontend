import React from 'react';
import styles from "./page.module.css";
import HeaderAndFooterLayout from '../HeaderAndFooterLayout/HeaderAndFooterLayout';


export default function Page() {
    return (
        <HeaderAndFooterLayout>
            <main>
                <div className={styles.preview_container}></div>
                <h1 className={styles.title}>Экскурсии</h1>
                <div>
                    <h3>Виртуальная экскурсия</h3>
                    <div className={styles.cards_container}>


                    </div>
                    {/*<TrendingSlider/>*/}
                </div>
            </main>
        </HeaderAndFooterLayout>
    );
};