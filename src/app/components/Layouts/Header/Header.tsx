import styles from "./Header.module.css"
import image from "../../../../static/images/logo.svg";
function Header() {
    return (
        <header className={styles.header_container}>
            <nav className={styles.header_nav}>
                <ul>
                    <li className={styles.logo}></li>
                    <li>Главная</li>
                    <li>О лаборатории</li>
                    <li>Новости</li>
                    <li>Проекты</li>
                    <li>Экскурсия</li>
                    <li><a href="https://sia.by/">sia.by</a></li>
                    <li>Войти</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;