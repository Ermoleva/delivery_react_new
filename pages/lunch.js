import { useCallback, useMemo, useState } from "react";
import styles from "../src/styles/components/ShopItem.module.scss";
import Photos from "../src/components/section/photos";
import LunchItem from "../src/components/section/lunchItem";
import LunchItemModal from "../src/components/section/LunchItemModal";
import Modal from "../src/components/section/ModalLunch";
import ModalNumber from "../src/components/section/ModalNumber";
import ModalOnline from "../src/components/section/ModalOnline";
import data from "../src/dataLunch";
import { fetchContent } from "../src/lib/contentApi";

function createInitialCart(items = data) {
  return items.map((item) => ({ ...item }));
}

export default function Lunch({ lunches }) {
  const [cart, setCart] = useState(() => createInitialCart(lunches));
  const [modalLunchActive, setModalLunchActive] = useState(false);
  const [numberActive, setNumberActive] = useState(false);
  const [onlineActive, setOnlineActive] = useState(false);

  const total = useMemo(
    () => ({
      price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
      count: cart.reduce((prev, curr) => prev + curr.count, 0),
    }),
    [cart]
  );

  const increase = useCallback((id) => {
    setCart((currentCart) =>
      currentCart.map((lunchItem) => {
        if (lunchItem.id !== id) {
          return lunchItem;
        }

        const nextCount = lunchItem.count + 1;

        return {
          ...lunchItem,
          count: nextCount,
          priceTotal: nextCount * lunchItem.price,
        };
      })
    );
  }, []);

  const decrease = useCallback((id) => {
    setCart((currentCart) =>
      currentCart.map((lunchItem) => {
        if (lunchItem.id !== id) {
          return lunchItem;
        }

        const nextCount = Math.max(lunchItem.count - 1, 0);

        return {
          ...lunchItem,
          count: nextCount,
          priceTotal: nextCount * lunchItem.price,
        };
      })
    );
  }, []);

  const lunch = useMemo(
    () =>
      cart.map((lunchItem) => (
        <LunchItem
          key={lunchItem.id}
          lunchItem={lunchItem}
          increase={increase}
          decrease={decrease}
        />
      )),
    [cart, increase, decrease]
  );

  const lunchModal = useMemo(
    () =>
      cart.map((lunchItem) => (
        <LunchItemModal
          key={lunchItem.id}
          lunchItem={lunchItem}
          total={total}
          increase={increase}
          decrease={decrease}
        />
      )),
    [cart, total, increase, decrease]
  );

  return (
    <>
      <Modal
        active={modalLunchActive}
        setActive={setModalLunchActive}
        total={total}
        lunchModal={lunchModal}
        increase={increase}
        decrease={decrease}
        numberActive={numberActive}
        setNumberActive={setNumberActive}
        onlineActive={onlineActive}
        setOnlineActive={setOnlineActive}
      />
      <ModalNumber active={numberActive} setActive={setNumberActive} />
      <ModalOnline
        total={total}
        items={cart}
        orderType="lunch"
        active={onlineActive}
        setActive={setOnlineActive}
      />

      <section className={styles.product__info}>
        <div className={styles.container}>
          <h2 className={styles.product__info_title}>Бізнес-ланчи</h2>
          <p className={styles.product__info_text}>
            Представляємо солодку колекцію корисних цукерок. Створені з любов'ю та
            виготовлені з натуральних продуктів без додавання цукру - з
            заботой о вас и ваших близких!
            <br />
            <br />
            Вартість доставки 60 грн за попереднім замовленням (за 1 добу).
            Попереднє замовлення передбачає доставку наступного дня з
            6:00-10:00. Мінімальне замовлення - от 6 конфет. Вага 1 цукерки 25 г.
            <br />
            <br />
            Замовлення на завтра принимаются до 11-00 поточного дня.
            <br />
            <br />
            Цукерки доставляються у прозорих пакетах зі стікером. Ви можете
            замовити подарунковий бокс зі стрічкою вартістю 20 грн
          </p>
        </div>
      </section>

      <section className={styles.product__main}>
        <div className={styles.container}>
          <div className={styles.product__header}>
            <button
              className={styles.product__order}
              onClick={() => setModalLunchActive(true)}
            >
              Оформити замовлення
            </button>
          </div>

          <div className={styles.product__items}>{lunch}</div>
        </div>
      </section>

      <Photos />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const lunches = await fetchContent("lunches");
    return { props: { lunches } };
  } catch (error) {
    return { props: { lunches: data } };
  }
}
