import styles from "./Input.module.css"
interface InputProps {
    label?: string
    placeHolder: string
}

const Input = ({label, placeHolder, ...props}: InputProps) => {
    return (
        <div className={styles.input_container}>
            {label && <label className={styles.label}>{label}</label>}
            <input  className={styles.input} placeholder={placeHolder} {...props}/>
        </div>
    );
};

export default Input;