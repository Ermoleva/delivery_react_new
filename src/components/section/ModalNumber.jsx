import styles from "../../styles/components/ModalNumber.module.scss"
import Image from "next/future/image";
import close from "../../images/closeModal.svg";

export default function ModalNumber({active, setActive}){
    return(


        <div className={[active ? styles.number__active : styles.number]}  onClick={() => setActive(false)}>

            <div className={styles.number__content}>

                <div className={styles.number__wrapp} onClick={e => e.stopPropagation()}>
                <div className={styles.number__data}>
                    <h2 className={styles.number__title}>Ім'я</h2>
                    <input
                        className={styles.number__input}
                        required
                        placeholder="Ваше ім'я"
                        name="name"
                        type="text"
                    />

                </div>
                <div className={styles.number__data}>
                    <h2 className={styles.number__title}>Номер телефона</h2>
                    <input
                        className={styles.number__input}
                        required
                        placeholder="Введіть номер телефону"
                        name="tel"
                        type="text"
                    />
                </div>
                <div className={styles.number__button} onClick={() => setActive(false)}>Замовити</div>


                </div>
                <Image src={close} alt="close" layout={'raw'} className={styles.number__close_img}/>
            </div>
        </div>
    )
}