'use client'

import React, { useState } from 'react';
import styles from './page.module.css';
import { useRouter } from 'next/navigation'
import PrimaryButton from '@/components/UI/Buttons/PrimaryButton/PrimaryButton';
import Link from 'next/link';

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
                body: JSON.stringify({ email, password }),
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
        <main className={styles.login_section}>
            <div className={styles.link_back_container}>
                <Link className={styles.back_link} href="/">
                    <span className={`material-icons ${styles.arrow_icon_container}`}>arrow_back</span>
                    <div className={styles.link_back__title}>На главную</div>
                </Link>
            </div>
            <div className={styles.form_container}>
                <div className={styles.form_title}>Войти</div>
                <form className={styles.form} onSubmit={handleFormSubmit}>
                    <div className={styles.form_inputs_container}>
                        <div className={styles.input_container}>
                            <div className={styles.label}>Адрес электронной почты</div>
                            <input
                                className={styles.input}
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className={styles.input_container}>
                            <div className={styles.label}>Пароль</div>
                            <input
                                className={styles.input}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            {error &&
                                <p className={styles.error_message}>The username and/or password you specified are not correct.</p>}
                        </div>
                    </div>
                    <PrimaryButton type='submit'>{loading ? "Загрузка" : "Вход"}</PrimaryButton>
                </form>
            </div>
        </main>
    );
}