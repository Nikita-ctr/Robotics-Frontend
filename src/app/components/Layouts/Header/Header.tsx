"use client";
import styles from "./Header.module.css"
import Link from "next/link";
import {usePathname} from "next/navigation";

function Header() {
    const pathname = usePathname();
    return (
        <header className={styles.header_container}>
            <li className={styles.logo}></li>

            <nav className={styles.header_nav}>
                <ul>
                    <li>Главная</li>
                    <li>О лаборатории</li>
                    <li>Новости</li>
                    <li>Проекты</li>
                    <li>Экскурсия</li>
                    <li><Link href="https://sia.by/">sia.by</Link></li>
                </ul>
            </nav>
            <div>
                <li className={styles.login}><Link className={`link ${pathname === '/login' ? 'active' : ''}`}
                                                   href="/login">
                    Войти
                </Link></li>
            </div>
        </header>
    );
}

export default Header;