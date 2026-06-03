import styles from "../../styles/components/ModalOnline.module.scss"
import {useState} from "react";
import Image from "next/future/image";
import close from "../../images/closeModal.svg";
import Select from "react-select";

export default function ModalOnlineProgram({active, setActive}){


    const time = [
        {
            value: '13:00',
            label: '13:00',
        },
        {
            value: '14:30',
            label: '14:30',
        },
        {
            value: '15:45',
            label: '15:45',
        },
        {
            value: '17:00',
            label: '17:00',
        },
    ]

    const [timeDelivery, setTimeDelivery] = useState(
        'Час доставки'
    )

    const getValueTime = () => {
        return timeDelivery ? time.find(c => c.value === timeDelivery) : ''
    }

    // const onChange = (newValue:any) => {
    //     setTimeDelivery(newValue.value)
    // }

    const pay = [
        {
            value: 'visa',
            label: 'visa',
        },
        {
            value: 'післяплата',
            label: 'післяплата',
        },
        {
            value: 'Privat24',
            label: 'Privat24',
        },

    ]
    const [payDelivery, setPayDelivery] = useState(
        'Час доставки'
    )

    const getValuePay = () => {
        return payDelivery ? time.find(c => c.value === payDelivery) : ''
    }

    const program = [
        {
            value: 'Express Fit',
            label: 'Express Fit',
        },
        {
            value: 'slim',
            label: 'slim',
        },
        {
            value: 'fitness',
            label: 'fitness',
        },
        {
            value: 'balance',
            label: 'balance',
        },
        {
            value: 'balance +',
            label: 'balance +',
        },
        {
            value: 'strong',
            label: 'strong',
        },
        {
            value: 'maxi fit',
            label: 'maxi fit',
        },
    ]

    const [programDelivery, setProgramDelivery] = useState(
        'Прогами харчування'
    )
    const getValueProgram = () => {
        return programDelivery ? program.find(c => c.value === programDelivery) : ''
    }

    const cutlery = [
        {
            value: 'Так, потрібні',
            label: 'Так, потрібні',
        },
        {
            value: 'Ні, не потрібно',
            label: 'Ні, не потрібно',
        },
    ]

    const [cutleryDelivery, setСutleryDelivery] = useState(
        'Прогами харчування'
    )
    const getValueСutlery = () => {
        return cutleryDelivery ? cutlery.find(c => c.value === cutleryDelivery) : ''
    }



    return (
        <div className={[active ? styles.modal__active : styles.modal]} onClick={() => setActive(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <div className={styles.modal__close}>
                    <h2 className={styles.modal__mistake} onClick={() => setActive(false)}>Заповніть усі поля правильно</h2>
                    <Image onClick={() => setActive(false)} src={close}
                           alt="close" layout={'row'} className={styles.modal__close_img}/>
                </div>
                <div className={styles.modal__wrapp}>
                    <div className={styles.modal__wrapp_left}>
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="ім'я"
                            name="name"
                            type="text"
                        />
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Введіть номер телефону"
                            name="tel"
                            type="text"
                        />
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Електронна адреса"
                            name="e-mail"
                            type="text"
                        />
                        <Select
                            classNamePrefix='modal__select'
                            // onChange={onChange}
                            value={getValueProgram()}
                            options={program}
                            placeholder='Прогами харчування'/>

                        <div className={styles.modal__wrapp_adrress}>
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Вулиця"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Будинок:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Поверх:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Квартира: "
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Під'їзд:"
                                name="name"
                                type="text"
                            />
                            <input
                                className={styles.modal__input}
                                required
                                placeholder="Домофон: "
                                name="name"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className={styles.modal__wrapp_right}>
                        <Select
                            classNamePrefix='modal__select'
                            // onChange={onChange}
                            value={getValueTime()}
                            options={time}
                            placeholder='Час доставки'/>
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Кількість днів замовлення "
                            name="days"
                            type="text"
                        />
                        <Select
                            classNamePrefix='modal__select'
                            value={getValuePay()}
                            options={pay}
                            placeholder='Спосіб оплати'/>
                        <Select
                            classNamePrefix='modal__select'
                            value={getValueСutlery()}
                            options={cutlery}
                            placeholder='Мені потрібні прибори'/>
                        <input
                            className={styles.modal__input}
                            required
                            placeholder="Побажання"
                            name="text"
                            type="text"
                        />

                    </div>
                </div>
                <div className={styles.modal__order}>
                    <div className={styles.back__form_checkbox_wrapp}>
                        <label className={styles.back__form_checkbox}>
                            <input type="checkbox" name="radio"/>
                            Тест-день! Отримати знижку -30%?
                            <span className={styles.checkmark}> </span>
                        </label>
                    </div>
                    <div className={styles.back__form_checkbox_wrapp}>
                        <label className={styles.back__form_checkbox}>
                            <input type="checkbox" name="radio"/>
                            Згоден з умовами співпраці
                            <span className={styles.checkmark}></span>
                        </label>
                    </div>
                    <div className={styles.modal__btn} onClick={() => setActive(false)}>Замовити</div>
                </div>
            </div>
        </div>
    )
}