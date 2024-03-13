import styles from './ProjectHexagon.module.css'
import Image from "next/image";

interface HexagonProps {
    index: number,
    text: string,
}

const ProjectHexagon = ({ index, text }: HexagonProps) => {
    return (
        <div className={styles.hexagon_container}>
            <div className={styles.hexagon_image_container}>
                <Image
                    className={styles.hexagon_image}
                    key={index}
                    src={`/images/projects_heaxagon/hexagon_${index + 1}.png`}
                    alt=""
                    height={224}
                    width={198}
                />
                <div className={styles.hexagon_text}>{text}</div>
            </div>
        </div>
    );
}

export default ProjectHexagon;