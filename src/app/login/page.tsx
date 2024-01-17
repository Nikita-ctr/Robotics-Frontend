'use client'
import React, {useState} from 'react';
import styles from './page.module.css';
import {useRouter} from 'next/navigation'

interface LoginFormInput {
    email: string;
    password: string;
}

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false)
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)
    const handleFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/login', {
                cache: "no-cache",
                credentials: "include",
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}),
            });


            if (response.ok) {
                setTimeout(() => {
                    setLoading(false)
                    router.push('/');
                }, 1000)

            } else {
                setLoading(false)
                setError(true)
            }

        } catch (error) {
            console.error('Ошибка при входе:', error);
        }
    };

    return (
        <main className={styles.page}>
            <div className={styles.form_container}>
                <h1>Войти</h1>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <div className={styles.input_container}>
                        <label className={styles.label}>Адрес электронной почты</label>
                        <input
                            className={styles.input}
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={styles.input_container}>
                        <label className={styles.label}>Пароль</label>
                        <input
                            className={styles.input}
                            type="password"
                            placeholder="Password"
                            value={password}
                                onChange={(event) => setPassword(event.target.value)}
                        />
                        {error &&
                            <p className={styles.error}>The username and/or password you specified are not correct.</p>}
                    </div>
                    <button className={styles.button} type="submit">
                        {loading ? "Загрузка" : "Вход"}
                    </button>
                </form>
            </div>
        </main>
    );
}