import styles from "./ActualCard.module.css";
import Image from "next/image";
import PrimaryButton from "../UI/Buttons/PrimaryButton/PrimaryButton";

interface ActualCardProps {
    image: string,
    title: string,
    buttonText: string
}

const ActualCard = ({ image, title, buttonText }: ActualCardProps) => {
    return (
        <div className={styles.card_container}>
            <div className={styles.image_container}>
                <Image src={image} alt={"card image"} fill style={{ objectFit: "cover" }} />
            </div>
            <div className={styles.card_title}>{title}</div>
            <PrimaryButton>{buttonText}</PrimaryButton>
        </div>
    );
};

export default ActualCard;