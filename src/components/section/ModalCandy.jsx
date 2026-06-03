import Image from "next/future/image";
import styles from "../../styles/components/ModalCandy.module.scss";
import close from "../../images/closeModal.svg";

export default function ModalCandy({
  active,
  setActive,
  candiesModal,
  total,
  setNumberActive,
  setOnlineActive,
}) {
  const { count, price } = total;

  function handleOpenOnline() {
    setActive(false);
    setOnlineActive(true);
  }

  function handleOpenPhone() {
    setActive(false);
    setNumberActive(true);
  }

  return (
    <div
      className={active ? styles.modal__active : styles.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={styles.modal__content}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Ваш замовлення"
      >
        <button
          type="button"
          className={styles.modal__close}
          onClick={() => setActive(false)}
          aria-label="Закрити вікно"
        >
          <Image
            src={close}
            alt="Закрити"
            layout="raw"
            className={styles.modal__close_img}
          />
        </button>

        <div className={styles.modal__wrapp}>{candiesModal}</div>

        <div className={styles.modal__order_wrapp}>
          <div className={styles.modal__order}>
            <button
              type="button"
              className={styles.modal__order_online}
              onClick={handleOpenOnline}
            >
              Онлайн-замовлення
            </button>
            <button
              type="button"
              className={styles.modal__order_tel}
              onClick={handleOpenPhone}
            >
              Замовлення телефоном
            </button>
          </div>

          <div className={styles.modal__total_price}>
            <div className={styles.modal__amount}>{count} шт /</div>
            <div className={styles.modal__sum}>{price} грн</div>
          </div>
        </div>
      </div>
    </div>
  );
}
