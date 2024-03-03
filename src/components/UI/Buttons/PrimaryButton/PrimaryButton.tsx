import React from "react";
import styles from "./PrimaryButton.module.css";

interface PrimaryButtonProps {
    type?: "submit" | "reset" | "button" | undefined,
    children: React.ReactNode
}

const PrimaryButton = ({ type, children }: PrimaryButtonProps) => {
    return (
        <button className={styles.button} type={type}>
            {children}
        </button>
    );
};

export default PrimaryButton;