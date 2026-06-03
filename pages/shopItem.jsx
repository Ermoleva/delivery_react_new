import Photos from "../src/components/section/photos";
import Image from 'next/future/image';
import {useState, useEffect} from 'react'
import backArrow from "../src/images/article_back_arrow.svg"
import styles from "../src/styles/components/ShopItem.module.scss";
import CandyItem from "../src/components/section/CandyItem";
import CandyItemModal from "../src/components/section/CandyItemModal"

import data from "../src/dataCandy"
import Modal from "../src/components/section/ModalCandy";
import ModalNumber from "../src/components/section/ModalNumber";
import ModalOnline from "../src/components/section/ModalOnline";
import { fetchContent } from "../src/lib/contentApi";


export default function ShopItem({ shopItems }) {
    const [cart, setCart] = useState(shopItems || data);
    const [modalCandyActive, setModalCandyActive] = useState(false);
    const [numberActive, setNumberActive] = useState(false);
    const [onlineActive, setOnlineActive] = useState(false);
    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => {
            return prev + curr.priceTotal
        }, 0),
        count: cart.reduce((prev, curr) => {
            return prev + curr.count
        }, 0)
    })

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => {
                return prev + curr.priceTotal
            }, 0),
            count: cart.reduce((prev, curr) => {
                return prev + curr.count
            }, 0)
        })
    }, [cart])


    const increase = (id) => {
        setCart(() => {
            return cart.map((candyItem) => {
                if (candyItem.id === id) {
                    return {
                        ...candyItem,
                        count: candyItem.count + 1,
                        priceTotal: (candyItem.count + 1) * candyItem.price
                    }
                }
                return candyItem;
            })
        })
    }


    const decrease = (id) => {
        setCart(() => {
            return cart.map((candyItem) => {
                if (candyItem.id === id) {
                    const newCount = candyItem.count - 1 >= 0 ? candyItem.count - 1 : 0
                    return {
                        ...candyItem,
                        count: newCount,
                        priceTotal: newCount * candyItem.price
                    }
                }
                return candyItem
            })
        })
    }

    const candies = cart.map((candyItem) => {
        // eslint-disable-next-line react/jsx-key
        return <CandyItem key={candyItem.id} candyItem={candyItem} increase={increase} decrease={decrease}/>
    })

    const candiesModal = cart.map((candyItem) => {
        // eslint-disable-next-line react/jsx-key
        return <CandyItemModal key={candyItem.id} candyItem={candyItem} total={total} increase={increase}
                               decrease={decrease}/>
    })


    return (
        <>
            <Modal active={modalCandyActive} setActive={setModalCandyActive} numberActive={numberActive}
                   setNumberActive={setNumberActive} onlineActive={onlineActive}
                   setOnlineActive={setOnlineActive} total={total} candiesModal={candiesModal} increase={increase}
                   decrease={decrease}/>
            <ModalNumber active={numberActive} setActive={setNumberActive}/>
            <ModalOnline
                total={total}
                items={cart}
                orderType="shop"
                active={onlineActive}
                setActive={setOnlineActive}
            />
            <section className={styles.product__info}>
                <div className={styles.container}>
                    <h2 className={styles.product__info_title}>Корисні цукерки</h2>
                    <p className={styles.product__info_text}>
                        Представляємо солодку колекцію корисних цукерок. Створені з любов'ю та
                        виготовлені з натуральних продуктів без додавання цукру - з
                        заботой о вас и ваших близких!
                        <br/><br/>

                        Вартість доставки 60 грн за попереднім замовленням (за 1 добу).
                        Попереднє замовлення передбачає доставку наступного дня з
                        6:00-10:00. Мінімальне замовлення - от 6 конфет. Вага 1 цукерки 25 г.
                        <br/><br/>
                        Замовлення на завтрa принимаются до 11-00 поточного дня.
                        <br/><br/>

                        Цукерки доставляються у прозорих пакетах зі стікером. Ви можете
                        замовити подарунковий бокс зі стрічкою вартістю 20 грн
                    </p>
                </div>
            </section>

            <section className={styles.product__main}>
                <div className={styles.container}>
                    <div className={styles.product__header}>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a href="/shop" className={styles.product__back}>

                            <Image src={backArrow}
                                   alt="logo" layout={'raw'} className={styles.product__back_arrow}/>
                            <p>Назад</p>
                        </a>
                        <button className={styles.product__order} onClick={() => setModalCandyActive(true)}>Оформить
                            замовлення
                        </button>
                    </div>
                    <div className={styles.product__items}>

                        {candies}

                    </div>
                </div>
            </section>
            <Photos/>

        </>
    )
}

export async function getServerSideProps() {
    try {
        const shopItems = await fetchContent("shop");
        return { props: { shopItems } };
    } catch (error) {
        return { props: { shopItems: data } };
    }
}
