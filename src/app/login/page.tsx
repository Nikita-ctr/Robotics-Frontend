import styles from "./page.module.css"

interface LoginFormInput {
    email: string,
    password: string;
}

export default function Login() {
    return (
        <main className={styles.page}>
            <div className={styles.form_container}>
                <h1>Войти</h1>
                <form className={styles.form}>
                    <div className={styles.input_container}>
                        <label className={styles.label}>Адрес электронной почты</label>
                        <input className={styles.input} placeholder="Email"/>
                    </div>
                    <div className={styles.input_container}>
                        <label className={styles.label} >Пароль</label>
                        <input className={styles.input} type={"password"} placeholder="Password"/>
                    </div>
                    <button className={styles.button}>
                        Вход
                    </button>
                </form>
            </div>
        </main>
    )
}

