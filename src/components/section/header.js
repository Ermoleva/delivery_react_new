import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/future/image'
import Logo from '../../images/logoHeader.svg';
import Phone from '../../images/phone_icon.svg'
import styles from '../../styles/components/Header.module.scss';

export default function Header() {
    const [isActive, setActive] = useState('false');

    const ToggleClass = () => {
        setActive(!isActive);
    };
    return (
        <header className={['container', styles.header, isActive ? '' : styles.header__hide].join(' ')}>

            <div className={styles.header__logo_link}>

                <Image src={Logo}
                       alt="GastroChef" width={124} height={56} layout={'raw'} className={styles.header__logo}/>

            </div>
            <div className={styles.header__links_wrapp}>
                <div className={styles.header__links_items}>
                    <Link href="/">
                        <a href="src/components/section/header#" className={styles.header__link}>Прогами харчування</a>
                    </Link>
                    <Link href="/lunch">
                        <a href="src/components/section/header#" className={styles.header__link}>Бізнес-ланчі</a>
                    </Link>
                    <Link href="/shop">
                        <a href="src/components/section/header#" className={styles.header__link}>Gastro Shop</a>
                    </Link>
                    <Link href="/about">
                        <a href="src/components/section/header#" className={styles.header__link}>О нас</a>
                    </Link>
                    <Link href="/blog">
                        <a href="src/components/section/header#" className={styles.header__link}>Блог</a>
                    </Link>

                </div>
                <div className={styles.header__phone}>
                    <div className={styles.header__call}>
                        <a href="tel:+380689494919" className={styles.header__number}>
                            <p className={styles.header__number_text}>+38 (068) 949 - 49 -19</p>
                            <Image src={Phone}
                                   alt="GastroChef" width={124} height={56} layout={'raw'}
                                   className={styles.header__call_icon}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={[styles.hamburger, isActive ? '' : styles.hamburger_active].join(' ')}
                 onClick={ToggleClass}>
                <span></span>
                <span></span>
                <span></span>
            </div>

        </header>
    );
}
