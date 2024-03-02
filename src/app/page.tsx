import styles from "./page.module.css"
import TrendingSlider from "../../src/app/components/Slider/TrendingSlider";
import ActualCard from "@/app/components/ActualCard/ActualCard";
import DividerDecorator from "./components/DividerDecorator/DividerDecorator";
import ProjectHexagon from "./components/ProjectHexagon/ProjectHexagon";

export default function Home() {

    const preview_description: string = "Ведущая лаборатория БрГТУ в области обучения и разработки проектов по автоматизации и роботизации производственных предприятий";

    const cards_data = [
        { img_src: '', title: 'Что нужно знать, чтобы попасть в лабораторию?', button_text: 'Читать' },
        { img_src: '', title: 'Записаться на экскурсию', button_text: 'Читать' },
        { img_src: '', title: 'Проекты для новичков', button_text: 'Читать' },
        { img_src: '', title: 'Есть кто в лаборатории?', button_text: 'Читать' },
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
        </main>
    );
}
