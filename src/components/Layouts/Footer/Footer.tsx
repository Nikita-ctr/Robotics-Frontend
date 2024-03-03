import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className={styles.footer_section}>
            <div className={styles.footer_container}>

                <div className={styles.footer_info}>
                    <div className={styles.info_item}>
                        <div className={styles.info_title}>Адрес</div>
                        <div className={styles.info_text}>Беларусь</div>
                        <div className={styles.info_text}>224017 г. Брест</div>
                        <div className={styles.info_text}>ул. Московская 267, корпус 3, ауд. 129</div>
                    </div>
                    <div className={styles.info_item}>
                        <div className={styles.info_title}>Время работы</div>
                        <div className={styles.info_text}>9:00 - 20:00</div>
                    </div>
                    <div className={styles.info_item}>
                        <div className={styles.info_title}>Контакты</div>
                        <div className={styles.info_text}>Тел: +375 29 527 45 39</div>
                        <div className={styles.info_text}>E-mail: vvkasyanik@bstu.by</div>
                        <div className={styles.social_networks_container}>
                            <Image src={"/icons/instagram.svg"} alt="" height={48} width={48} />
                            <Image src={"/icons/telegram.svg"} alt="" height={48} width={48} />
                        </div>
                    </div>
                </div>

                <div className={styles.footer_map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1225.5888271185004!2d23.756147338901897!3d52.09469829298824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTLCsDA1JzQwLjkiTiAyM8KwNDUnMjYuOCJF!5e0!3m2!1sru!2sby!4v1709412894474!5m2!1sru!2sby" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
            <div className={styles.copyright}>Copyright © 2023 Industrial Robotics</div>
        </footer>
    );
}
