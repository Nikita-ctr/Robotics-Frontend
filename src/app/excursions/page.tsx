import styles from "./page.module.css";
import Image from "next/image";

import HeaderAndFooterLayout from '../HeaderAndFooterLayout/HeaderAndFooterLayout';
import ExcursionScans from "@/components/ExcursionScans/ExcursionScans";
import PrimaryButton from "@/components/UI/Buttons/PrimaryButton/PrimaryButton";


export default function Page() {
    return (
        <HeaderAndFooterLayout>
            <main>
                <div className={styles.preview_container}>
                    <div className={styles.preview_container__title}>Экскурсия</div>
                </div>

                <div className={styles.virtual_excursion_container}>
                    <div className={styles.virtual_excursion__title}>Виртуальная экскурсия</div>
                    <ExcursionScans />
                </div>

                <div className={styles.local_excursion_container}>
                    <div className={styles.local_excursion__title}>Запись на реальную экскурсию</div>
                    <div className={styles.local_excursion__form_container}>
                        <form className={styles.form_container}>
                            <div className={styles.form_inputs_container}>
                                <div className={styles.input_container}>
                                    <div className={styles.label}>ФИО</div>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        placeholder="ФИО"
                                    />
                                </div>
                                <div className={styles.input_container}>
                                    <div className={styles.label}>Название организации</div>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        placeholder="Название организации"
                                    />
                                </div>
                                <div className={styles.input_container}>
                                    <div className={styles.label}>Номер телефона</div>
                                    <input
                                        className={styles.input}
                                        type="phone"
                                        placeholder="+375 (__) ___-__-__"
                                    />
                                </div>
                                <div className={styles.input_container}>
                                    <div className={styles.label}>Email</div>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className={styles.input_container}>
                                    <div className={styles.label}>Дата экскурсии</div>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        placeholder="11.22.63"
                                    />
                                </div>
                            </div>
                            <PrimaryButton type='submit'>Записаться</PrimaryButton>
                        </form>
                        <div className={styles.form_container__illustration_container}>
                            <Image src="/images/excursions/robot_with_coffee.jpg" alt="" fill />
                        </div>
                    </div>
                </div>
            </main>
        </HeaderAndFooterLayout>
    );
};