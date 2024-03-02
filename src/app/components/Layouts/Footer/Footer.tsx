import React from 'react';
import styles from './Footer.module.css';
import teleg from '../../../../static/images/telegram.svg'
import inst from '../../../../static/images/instagram.png'
function Footer() {
    return (
        <footer className={styles.footer_container}>
            <div className={styles.footer}>

                <div className={styles.footer_info}>
                    <div className={styles.info_item}><h3>Адрес</h3>
                        <h4>Беларусь</h4>
                        <h4>224017 г. Брест</h4>
                        <h4>ул. Московская 267, корпус 3, ауд. 129</h4>
                    </div>
                    <div className={styles.info_item}>
                        <h3>Время работы</h3>
                        <h4>9:00 - 20:00</h4>
                    </div>
                    <div className={styles.info_item}>
                        <h3>Контакты</h3>
                        <h4>Тел: +375 29 527 45 39</h4>
                        <h4>E-mail: vvkasyanik@bstu.by</h4>
                        <div>
                            <img height={"48px"} width={"48px"} src={""} alt={"image"}/>
                           <img height={"48px"} width={"48px"} src={teleg} alt={"image"}/>
                        </div>
                    </div>
                </div>

                <div>
                    Карты
                </div>

            </div>
            <div className={styles.copyright}>
                Copyright © 2023 Industrial Robotics
            </div>
        </footer>
    );
}

export default Footer;