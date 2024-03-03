import React from "react";
import styles from "./SecondaryButton.module.css";

interface SecondaryButtonProps {
    type?: "submit" | "reset" | "button" | undefined,
    children: React.ReactNode
}

const SecondaryButton = ({ type, children }: SecondaryButtonProps) => {
    return (
        <button className={styles.button} type={type}>
            {children}
        </button>
    );
};

export default SecondaryButton;