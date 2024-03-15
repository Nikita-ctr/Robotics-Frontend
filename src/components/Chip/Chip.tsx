import styles from './Chip.module.css';

interface ChipProps {
    text: string
}

const Chip = ({ text }: ChipProps) => {
    return (
        <div className={styles.chip_container}>
            {text}
        </div>
    );
}

export default Chip;