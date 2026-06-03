import styles from "../../styles/components/Footer.module.scss"

import Image from 'next/future/image'
import logo from "../../images/logo_footer.svg";
import inst from "../../images/inst_icon.svg"
import facebook from "../../images/facebook_icon.svg"
import viber from "../../images/viber_icon.svg"
import telegram from "../../images/telegram_icon.svg"


export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footer__wrapp}>
                    <div className={styles.footer__links}>
                        <a href="src/components/section/footer#" className={styles.footer__link}>Прогами харчування</a>
                        <a href="src/components/section/footer#" className={styles.footer__link}>О нас</a>
                        <a href="src/components/section/footer#" className={styles.footer__link}>Бізнес-ланчі</a>
                        <a href="src/components/section/footer#" className={styles.footer__link}>Gastro Shop</a>
                        <a href="src/components/section/footer#" className={styles.footer__link}>Блог</a>
                    </div>
                    <div className={styles.footer__logo}>
                        <Image src={logo}
                               alt="logo" layout={'raw'} className={styles.footer__logo_img}/>

                        <p className={styles.footer__logo_text}>сервіс здорового харчування</p>
                    </div>
                    <div className={styles.footer__social}>
                        <a href="src/components/section/footer#" className={styles.footer__social_link}
                        >Умови <br/>співпраці</a
                        >
                        <a href="src/components/section/footer#" className={styles.footer__social_link}>FAQ</a>
                        <div className={styles.footer__social_items}>
                            <div className={styles.footer__social_item}>
                                <a href="src/components/section/footer#" className={styles.footer__social_img_link}
                                >
                                    <Image src={inst}
                                           alt="logo" layout={'raw'} className={styles.footer__social_img}/></a>
                            </div>
                            <div className={styles.footer__social_item}>
                                <a href="src/components/section/footer#" className={styles.footer__social_img_link}
                                >
                                    <Image src={facebook}
                                           alt="logo" layout={'raw'} className={styles.footer__social_img}/>
                                </a>
                            </div>
                            <div className={styles.footer__social_item}>
                                <a href="src/components/section/footer#" className={styles.footer__social_img_link}
                                >
                                    <Image src={viber}
                                           alt="logo" layout={'raw'} className={styles.footer__social_img}/>
                                </a>
                            </div>
                            <div className={styles.footer__social_item}>
                                <a href="src/components/section/footer#" className={styles.footer__social_img_link}
                                >
                                    <Image src={telegram}
                                           alt="logo" layout={'raw'} className={styles.footer__social_img}/>
                                </a>
                            </div>
                        </div>
                        <div className={styles.footer__number}>
                            <a href="tel:+380689494919" className={styles.footer__number_link}
                            >+38 (068) 949 - 49 - 19</a
                            >
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
