import React from "react";
import styles from "./SecondaryButton.module.css";

interface SecondaryButtonProps {
    children: React.ReactNode
}

const SecondaryButton = ({children}: SecondaryButtonProps) => {
    return (
        <button className={styles.button}>
            {children}
        </button>
    );
};

export default SecondaryButton;