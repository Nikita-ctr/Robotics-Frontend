import styles from "./page.module.css"
import ActualCard from "@/components/ActualCard/ActualCard";
import DividerDecorator from "../components/DividerDecorator/DividerDecorator";
import ProjectHexagon from "../components/ProjectHexagon/ProjectHexagon";
import HeaderAndFooterLayout from "./HeaderAndFooterLayout/HeaderAndFooterLayout";
import TrendingSlider from "@/components/Slider/TrendingSlider";

import Image from "next/image";


export default function Home() {

    const preview_description: string = "Ведущая лаборатория БрГТУ в области обучения и разработки проектов по автоматизации и роботизации производственных предприятий";

    const cards_data = [
        { title: 'Что нужно знать, чтобы попасть в лабораторию?', button_text: 'Читать' },
        { title: 'Записаться на экскурсию', button_text: 'Читать' },
        { title: 'Проекты для новичков', button_text: 'Читать' },
        { title: 'Есть кто в лаборатории?', button_text: 'Читать' },
    ];

    const projects_data = [
        { title: 'Обучение и переподготовка' },
        { title: 'Проектирование робототехнических комплексов' },
        { title: 'Промышленная маркировка товаров' },
        { title: 'Цифровое моделирование' },
        { title: 'Аддитивные технологиии' },
        { title: 'Разработка систем технического зрения' },
        { title: 'Проектирование робототехнических комплексов' },
    ]

    return (
        <HeaderAndFooterLayout>
            <main>
                <div className={styles.preview_section}>
                    <div className={styles.preview_section__title}>Industrial Robotics</div>
                    <div className={styles.preview_section__description}>{preview_description}</div>
                </div>

                <DividerDecorator />

                <TrendingSlider />

                <div className={styles.cards_section}>
                    <div className={styles.section__title}>Актуальное</div>
                    <div className={styles.cards_container}>
                        {
                            cards_data.map((element, index) => {
                                return (
                                    <ActualCard key={index} image={`/images/actual_cards/card_${index + 1}.jpg`} title={element.title}
                                        buttonText={element.button_text} />
                                );
                            })
                        }
                    </div>
                </div>

                <div className={styles.projects_section}>
                    <div className={styles.section__title}>Проекты</div>
                    <div className={styles.project_hexagons_container}>
                        {
                            projects_data.map((element, index) => {
                                return (
                                    <ProjectHexagon key={index} index={index} text={element.title} />
                                );
                            })
                        }
                    </div>
                </div>

                <div className={styles.clients_section}>
                    <div className={styles.section__title}>Наши партнеры</div>
                    <div className={styles.general_partner_container}>
                        <div className={styles.general_partner__title}>Генеральный партнер</div>
                        <div className={styles.general_partner__image_container}>
                            <Image src="/icons/home/clients/sia_logo.svg" alt="sia.by" fill />
                        </div>
                    </div>
                    {/* Partners slider */}
                </div>
            </main>
        </HeaderAndFooterLayout>
    );
}
