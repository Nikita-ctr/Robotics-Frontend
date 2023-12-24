import styles from "./Header.module.css"
import image from "@/static/images/logo.svg";

function Header() {
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
                    <li><a href="https://sia.by/">sia.by</a></li>
                </ul>
            </nav>
            <div>
                <li className={styles.login}>Войти</li>
            </div>
        </header>
    );
}

export default Header;