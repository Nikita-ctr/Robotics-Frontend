import styles from "./InputSelect.module.css"
interface InputSelectProps {
    label: string
    placeHolder: string
}

const InputSelect = ({label, placeHolder}: InputSelectProps) => {
    return (
        <div>
            <label>{label}</label>
            <div>
                <select>
                    <option className={styles.option_container} selected value={""}></option>
                    <option>Вариант 2</option>
                    <option>Вариант 3</option>
                    <label>{label}</label>
                </select>
            </div>
        </div>
    );
};

export default InputSelect;