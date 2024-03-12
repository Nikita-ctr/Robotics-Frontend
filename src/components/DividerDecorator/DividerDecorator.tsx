import styles from "./DividerDecorator.module.css"

export default function DividerDecorator() {

    const colorsList: string[] = [
        '#0D6DB5',
        '#6BB7CE',
        '#5AAB6F',
        '#8A9ED1',
        '#93CBC2',
        '#5598C6',
    ];

    return (
        <div className={styles.divider_container}>
            {
                colorsList.map((element, index) => {
                    return (
                        <div key={index} className={styles.divider_decorator} style={{ backgroundColor: element }}></div>
                    );
                })
            }
        </div>
    );
}