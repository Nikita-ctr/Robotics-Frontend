import styles from "./Input.module.css"
interface InputProps {
    label?: string
    placeHolder: string
    className?: string
}

const Input = ({ label, placeHolder, className, ...props }: InputProps) => {
    const inputClassName = `${styles.input} ${className || ""}`;

    return (
        <div className={styles.input_container}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={inputClassName}
                placeholder={placeHolder}
                {...props}
            />
        </div>
    );
};

export default Input;