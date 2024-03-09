"use client";

import styles from "./Header.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={styles.header_container}>
            <div className={styles.logo_container}>
                <Image src="/icons/home/header/ir_logo.svg" alt="Logo" fill />
            </div>

            <div className={styles.header_navigation}>
                <Link className={styles.navigation_link} href="/">Главная</Link>
                <Link className={styles.navigation_link} href="/">О лаборатории</Link>
                <Link className={styles.navigation_link} href="/">Новости</Link>
                <Link className={styles.navigation_link} href="/">Проекты</Link>
                <Link className={styles.navigation_link} href="/excursions">Экскурсия</Link>
            </div>

            <div>
                <Link className={`${styles.navigation_link} ${pathname === '/login' ? 'active' : ''}`}
                    href="/login">
                    Войти
                </Link>
            </div>
        </ header>
    );
}