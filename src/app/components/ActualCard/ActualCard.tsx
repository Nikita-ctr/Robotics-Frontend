import styles from "./ActualCard.module.css";
import SecondaryButton from "@/app/components/UI/Buttons/SecondaryButton/SecondaryButton";
import Image from "next/image";

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
            <SecondaryButton>{buttonText}</SecondaryButton>
        </div>
    );
};

export default ActualCard;