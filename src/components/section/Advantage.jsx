import Image from 'next/future/image';
import styles from "../../styles/components/Advantage.module.scss"

const defaultAdvantages = [
    { icon: "/images/advantage_1.svg", title: "Бережемо природу. Еко-тара та прибори." },
    { icon: "/images/advantage_2.svg", title: "28 днів без повторення, понад 300 страв!" },
    { icon: "/images/advantage_3.svg", title: "Безкоштовно замінюємо страви та інгредієнти." },
    { icon: "/images/advantage_4.svg", title: "Готуємо вночі, пакуємо та відправляємо вам!" },
    { icon: "/images/advantage_5.svg", title: "Щоденна зручна та безкоштовна доставка з 6:00 до 10:00" },
    { icon: "/images/advantage_6.svg", title: "Зберігаємо вашу енергію та звільняємо до 14 годин на тиждень від готування!" },
];

export default function Advantage({ items = defaultAdvantages }) {
    return (
        <div className={styles.advantage}>
            <div className={styles.advantage__items}>
            {items.map((item) => (
                <div className={styles.advantage__item} key={item.id || item.title}>
                    <Image src={item.icon}
                    alt={item.imageAlt || "advantage"} width={96} height={96} layout={'raw'} className={styles.advantage__img}/>
                    <h2 className={styles.advantage__text}>{item.title}</h2>
                </div>
            ))}
            </div>
            </div>
            )
        }
