import styles from "./ActualCard.module.css";
import SecondaryButton from "@/app/components/UI/Buttons/SecondaryButton/SecondaryButton";
import Image from "next/image";

interface ActualCardProps {
    image: string,
    title: string,
    buttonText: string
}

const ActualCard = ({image, title, buttonText}: ActualCardProps) => {
    return (
        <div className={styles.card}>
            <Image width={340} height={340} className={styles.image} src={image} alt={"some image"}/>
            <h2 className={styles.title}>{title}</h2>
            <SecondaryButton>{buttonText}</SecondaryButton>
        </div>
    );
};

export default ActualCard;