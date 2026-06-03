import { useState } from "react";
import Select from "react-select";
import Image from "next/future/image";
import styles from "../../styles/components/ModalOnline.module.scss";
import close from "../../images/closeModal.svg";
import { createOrder } from "../../lib/contentApi";

const timeOptions = [
  { value: "13:00", label: "13:00" },
  { value: "14:30", label: "14:30" },
  { value: "15:45", label: "15:45" },
  { value: "17:00", label: "17:00" },
];

const payOptions = [
  { value: "visa", label: "Visa" },
  { value: "cash", label: "Післяплата" },
  { value: "privat24", label: "Privat24" },
];

const initialFormData = {
  name: "",
  phone: "",
  street: "",
  house: "",
  floor: "",
  apartment: "",
  entrance: "",
  intercom: "",
  timeDelivery: null,
  payDelivery: null,
};

export default function ModalOnline({ active, setActive, total, items = [], orderType = "other" }) {
  const { count, price } = total;
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: false,
    }));
  }

  function handleSelectChange(fieldName, selectedOption) {
    setFormData((currentFormData) => ({
      ...currentFormData,
      [fieldName]: selectedOption,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: false,
    }));
  }

  function handleClose() {
    setActive(false);
    setErrors({});
  }

  function handleCloseSuccess() {
    setShowSuccess(false);
  }

  function validateForm() {
    const nextErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      street: formData.street.trim() === "",
      house: formData.house.trim() === "",
      timeDelivery: !formData.timeDelivery,
      payDelivery: !formData.payDelivery,
    };

    setErrors(nextErrors);

    return !Object.values(nextErrors).some(Boolean);
  }

  async function handleSubmit() {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await createOrder({
        orderType,
        customer: {
          name: formData.name,
          phone: formData.phone,
          street: formData.street,
          house: formData.house,
          floor: formData.floor,
          apartment: formData.apartment,
          entrance: formData.entrance,
          intercom: formData.intercom,
          deliveryTime: formData.timeDelivery?.label,
          paymentMethod: formData.payDelivery?.label,
        },
        items: items
          .filter((item) => Number(item.count) > 0)
          .map((item) => ({
            id: item.id,
            title: item.title,
            quantity: item.count,
            unitPrice: item.price,
            totalPrice: item.priceTotal,
          })),
      });

      setFormData(initialFormData);
      setActive(false);
      setShowSuccess(true);
    } catch (requestError) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        submit: requestError.message,
      }));
    } finally {
      setIsSubmitting(false);
    }
  }

  const isFormValid =
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.street.trim() !== "" &&
    formData.house.trim() !== "" &&
    Boolean(formData.timeDelivery) &&
    Boolean(formData.payDelivery) &&
    count > 0;

  const showError = Object.values(errors).some(Boolean);

  const inputClassName = (fieldName) =>
    `${styles.modal__input} ${errors[fieldName] ? styles.modal__input_error : ""}`;

  const selectClassName = (fieldName) =>
    `${styles.modal__select_wrapp} ${
      errors[fieldName] ? styles.modal__select_wrapp_error : ""
    }`;

  const successModal = (
    <div className={styles.modal__active} onClick={handleCloseSuccess}>
      <div
        className={styles.modal__success}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Замовлення прийнято"
      >
        <button
          type="button"
          className={styles.modal__close_button}
          onClick={handleCloseSuccess}
          aria-label="Закрити сповіщення"
        >
          <Image
            src={close}
            alt="Закрити"
            layout="raw"
            className={styles.modal__close_img}
          />
        </button>
        <h2 className={styles.modal__success_title}>Замовлення прийнято</h2>
        <p className={styles.modal__success_text}>
          Дякуємо! Ми отримали ваше замовлення і скоро зв'яжемося з вами для підтвердження.
        </p>
        <button
          type="button"
          className={styles.modal__success_btn}
          onClick={handleCloseSuccess}
        >
          Чудово
        </button>
      </div>
    </div>
  );

  if (!active && showSuccess) {
    return successModal;
  }

  return (
    <>
      <div
        className={active ? styles.modal__active : styles.modal}
        onClick={handleClose}
      >
        <div
          className={styles.modal__content}
          onClick={(event) => event.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-label="Онлайн-замовлення"
        >
          <div className={styles.modal__close}>
            {showError ? (
              <h2 className={styles.modal__mistake}>
                {errors.submit || "Заповніть обов'язкові поля"}
              </h2>
            ) : (
              <div></div>
            )}

            <button
              type="button"
              className={styles.modal__close_button}
              onClick={handleClose}
              aria-label="Закрити вікно"
            >
              <Image
                src={close}
                alt="Закрити"
                layout="raw"
                className={styles.modal__close_img}
              />
            </button>
          </div>

          <div className={styles.modal__wrapp}>
            <div className={styles.modal__wrapp_left}>
              <input
                className={inputClassName("name")}
                required
                placeholder="Ім'я"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className={inputClassName("phone")}
                required
                placeholder="Введіть номер телефону"
                name="phone"
                type="tel"
                inputMode="tel"
                value={formData.phone}
                onChange={handleInputChange}
              />

              <div className={styles.modal__wrapp_adrress}>
                <input
                  className={inputClassName("street")}
                  required
                  placeholder="Вулиця"
                  name="street"
                  type="text"
                  value={formData.street}
                  onChange={handleInputChange}
                />
                <input
                  className={inputClassName("house")}
                  required
                  placeholder="Будинок:"
                  name="house"
                  type="text"
                  value={formData.house}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.modal__input}
                  placeholder="Поверх:"
                  name="floor"
                  type="text"
                  value={formData.floor}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.modal__input}
                  placeholder="Квартира:"
                  name="apartment"
                  type="text"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.modal__input}
                  placeholder="Під'їзд:"
                  name="entrance"
                  type="text"
                  value={formData.entrance}
                  onChange={handleInputChange}
                />
                <input
                  className={styles.modal__input}
                  placeholder="Домофон:"
                  name="intercom"
                  type="text"
                  value={formData.intercom}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className={styles.modal__wrapp_right}>
              <div className={selectClassName("timeDelivery")}>
                <Select
                  classNamePrefix="modal__select"
                  value={formData.timeDelivery}
                  onChange={(selectedOption) =>
                    handleSelectChange("timeDelivery", selectedOption)
                  }
                  options={timeOptions}
                  placeholder="Час доставки"
                />
              </div>
              <div className={selectClassName("payDelivery")}>
                <Select
                  classNamePrefix="modal__select"
                  value={formData.payDelivery}
                  onChange={(selectedOption) =>
                    handleSelectChange("payDelivery", selectedOption)
                  }
                  options={payOptions}
                  placeholder="Спосіб оплати"
                />
              </div>
            </div>
          </div>

          <div className={styles.modal__order}>
            <button
              type="button"
              className={`${styles.modal__btn} ${
                !isFormValid ? styles.modal__btn_disabled : ""
              }`}
              onClick={handleSubmit}
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Відправляємо..." : "Замовити"}
            </button>
            <div className={styles.modal__total}>
              {count} шт / {price} грн
            </div>
          </div>
        </div>
      </div>
      {showSuccess ? successModal : null}
    </>
  );
}
