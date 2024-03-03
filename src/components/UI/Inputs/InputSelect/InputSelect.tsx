import styles from "./InputSelect.module.css"
interface InputSelectProps {
    label: string
    placeHolder: string
    options: any
}

const InputSelect = ({ label, placeHolder, options }: InputSelectProps) => {
    return (
        <div>
            {label && <label className={styles.label}>{label}</label>}
            <div className={styles.input_container}>
                <select className={styles.input}>
                    <option disabled>{placeHolder}</option>
                    {options.map((option: string) => (
                        <option key={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default InputSelect;