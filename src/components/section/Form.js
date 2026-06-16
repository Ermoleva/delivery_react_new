import { useState } from "react";
import { createOrder } from "../../lib/contentApi";
import styles from "../../styles/components/Form.module.scss";
import Accordion from "./Accordion";

const initialFormData = {
  name: "",
  phone: "",
  trialDay: false,
  agreement: false,
};

export default function Form() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: false,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = {
      name: formData.name.trim() === "",
      phone: formData.phone.trim() === "",
      agreement: !formData.agreement,
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      setIsSubmitted(false);
      return;
    }

    setIsSubmitting(true);

    try {
      const trialDayText = formData.trialDay
        ? "Тест-день: так, отримати знижку -30%"
        : "Тест-день: ні";

      await createOrder({
        orderType: "program",
        customer: {
          name: formData.name,
          phone: formData.phone,
          comment: trialDayText,
        },
        items: [
          {
            title: `Заявка з форми. ${trialDayText}`,
            quantity: 1,
            unitPrice: 0,
            totalPrice: 0,
          },
        ],
      });

      setFormData(initialFormData);
      setErrors({});
      setIsSubmitted(true);
    } catch (requestError) {
      setErrors((currentErrors) => ({
        ...currentErrors,
        submit: requestError.message,
      }));
      setIsSubmitted(false);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={styles.back}>
      <form className={styles.back__form} onSubmit={handleSubmit}>
        <h1 className={styles.back__form_title}>Оформити замовлення</h1>
        <h2 className={styles.back__form_subtitle}>
          Обговоріть усі деталі замовлення телефоном або самостійно вкажіть все
          подробности онлайн
        </h2>

        <div className={styles.back__form_name}>
          <label
            className={styles.back__form_order_title}
            htmlFor="order-name"
          >
            Ім'я
          </label>
          <input
            id="order-name"
            className={`${styles.back__form_name_input} ${
              errors.name ? styles.back__form_input_error : ""
            }`}
            required
            placeholder="Ваше ім'я"
            name="name"
            type="text"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className={styles.back__form_number}>
          <label
            className={styles.back__form_order_title}
            htmlFor="order-phone"
          >
            Номер телефона
          </label>
          <input
            id="order-phone"
            className={`${styles.back__form_number_input} ${
              errors.phone ? styles.back__form_input_error : ""
            }`}
            required
            placeholder="Введіть номер телефону"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.back__form_checkbox_wrapp}>
          <label className={styles.back__form_checkbox} htmlFor="trial-day">
            <input
              id="trial-day"
              type="checkbox"
              name="trialDay"
              checked={formData.trialDay}
              onChange={handleChange}
            />
            Тест-день! Отримати знижку -30%?
            <span className={styles.checkmark}></span>
          </label>
        </div>

        <div className={styles.back__form_checkbox_wrapp}>
          <label className={styles.back__form_checkbox} htmlFor="agreement">
            <input
              id="agreement"
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              required
            />
            Згоден з умовами співпраці
            <span className={styles.checkmark}></span>
          </label>
        </div>

        {errors.agreement ? (
          <p className={styles.back__form_error}>
            Потрібно погодитися з умовами співпраці.
          </p>
        ) : null}

        {errors.submit ? (
          <p className={styles.back__form_error}>{errors.submit}</p>
        ) : null}

        {isSubmitted ? (
          <p className={styles.back__form_success}>
            Замовлення прийнято. Ми скоро зв'яжемося з вами.
          </p>
        ) : null}

        <a className={styles.back__form_order_num} href="tel:+380689494919">
          Замовлення телефоном
        </a>

        <p className={styles.back__form_order_p}>АБО</p>

        <button
          className={styles.back__form_order_onl}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Відправляємо..." : "Онлайн-замовлення"}
        </button>
      </form>
      <Accordion />
    </div>
  );
}
