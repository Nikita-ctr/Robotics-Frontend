import DividerDecorator from '@/components/DividerDecorator/DividerDecorator';
import HeaderAndFooterLayout from '../HeaderAndFooterLayout/HeaderAndFooterLayout';
import styles from './page.module.css';

export default function Page() {
    return (
        <HeaderAndFooterLayout>
            <main>
                <div className={styles.preview_container}>
                    <div className={styles.preview_container__title}>О лаборатории</div>
                </div>

                <DividerDecorator />

                <div className={`${styles.description_section} ${styles.lab_goals_background}`}>
                    <div className={styles.description_container}>
                        <div className={styles.description_container__title}>Цели лаборатории</div>
                        <ul className={styles.description_container__list}>
                            <li>Подготовка и переподготовка кадров в области промышленной робототехники, автоматизации технологических процессов, цифрового инжиниринга, компьютерного моделирования и цифровых двойников;</li>
                            <li>Разработка инновационных технологий, образцов, изделий для областей промышленности;</li>
                            <li>Разработка робототехнических комплексов, уникальных захватных механизмов, специализированных транспортных систем, систем автоматизации для общих и частных случаев;</li>
                            <li>Моделирование и анализ технологических процессов.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.description_section} ${styles.competencies_background} ${styles.justify_flex_end}`}>
                    <div className={styles.description_container}>
                        <div className={styles.description_container__title}>Компетенции</div>
                        <ul className={styles.description_container__list}>
                            <li>Компьютерный инжиниринг производственных площадок,  технологических процессов, робототехнических комплексов и систем на основе современных инструментов Visual Components, Рациональное производство, AnyLogic;</li>
                            <li>Проектирование новых и уникальных видов РТК, захватных механизмов, моделирование и прототипирование устройств с использованием технологии коллаборативных роботов Techman Robots, Rozum Robotics, Universal Robots, Omron;</li>
                            <li>Подготовка конструкторской документации, разработка технологической документации с использование Autodesk Inventor, Компас3D;</li>
                            <li>Разработка программного обеспечения для систем управления РТК, коллаборативными и промышленными роботами;</li>
                            <li>Разработка компьютерных моделей производственных процессов, сценариев и вариантов применения, сбор и анализ модельных данных, подготовка и обоснование управленческих решений.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.description_section} ${styles.directions_background}`}>
                    <div className={styles.description_container}>
                        <div className={styles.description_container__title}>Направления</div>
                        <ul className={styles.description_container__list}>
                            <li>Разработка и внедрение новых современных цифровых технологий в производственные процессы предприятий;</li>
                            <li>Повышение кадрового потенциала предприятий;</li>
                            <li>Решение производственных проблем, узких мест, повышение качественных и количественных показателей работы производственных площадок заказчиков;</li>
                            <li>Консультирование предприятий по вопросам развития производственных процессов, совершенствования технологий;</li>
                            <li>Популяризация новых инновационных технологий для предприятий в виде экскурсий, выставок, семинаров, выступлений в СМИ;</li>
                            <li>Участие в разработке стандартов для новых технологий.</li>
                        </ul>
                    </div>
                </div>

                <div className={`${styles.description_section} ${styles.used_technologies_background} ${styles.justify_flex_end}`}>
                    <div className={styles.description_container}>
                        <div className={styles.description_container__title}>Применяемые технологии</div>
                        <ul className={styles.description_container__list}>
                            <li>Коллаборативные роботы Techman Robots, Rozum Robots, Universal Robots, Han\s Robots;</li>
                            <li>Промышленные роботы Omron, Hiwin, Kawasaki, Schneider Electric, Universal;</li>
                            <li>Программное обеспечение Visual Components/Рациональное производство для моделирования РТК;</li>
                            <li>Симулятор CoppelliaSim/Webots;</li>
                            <li>Фреймворк Robotics Operating system;</li>
                            <li>Фреймворк для моделирования SimPy;</li>
                            <li>Среда моделирования AnyLogic.</li>
                        </ul>
                    </div>
                </div>

            </main>
        </HeaderAndFooterLayout>
    );
}