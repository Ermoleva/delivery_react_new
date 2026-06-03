import styles from "../../styles/components/ShopItem.module.scss";

const CountCandy = ({count, increase, id, priceTotal, decrease}) => {

    return (
        <>
            <div className={styles.product__incr} onClick={() => {decrease(id)}}>
                <p>-</p>
            </div>
            <p className={styles.product__count_num} > {count}</p>
            <div className={styles.product__decr} onClick={() => {increase(id)}}>
                <p>+</p>
            </div>
            <div className={styles.product__price}>{count} шт /</div>

            <div className={styles.product__date}>{priceTotal} грн</div>
        </>
    )
}
export default CountCandy;