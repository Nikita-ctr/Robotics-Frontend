"use client";

import styles from "./Header.module.css"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
    const pathname = usePathname();

    return (
        <header className={styles.header_container}>
            <div>
                <Image src="/icons/ir_icon.png" alt="Logo" height={40} width={60} />
            </div>

            <div className={styles.header_navigation}>
                <Link className={styles.navigation_link} href="/">Главная</Link>
                <Link className={styles.navigation_link} href="/">О лаборатории</Link>
                <Link className={styles.navigation_link} href="/">Новости</Link>
                <Link className={styles.navigation_link} href="/">Проекты</Link>
                <Link className={styles.navigation_link} href="/excursions">Экскурсия</Link>
                <Link className={styles.navigation_link} href="https://sia.by/" target="_blank">sia.by</Link>
            </div>

            <div>
                <Link className={`${styles.navigation_link} ${pathname === '/login' ? 'active' : ''}`}
                    href="/login">
                    Войти
                </Link>
            </div>
        </header>
    );
}