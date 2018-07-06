import React from "react";
import QuantityField from "./QuantityField";
import DeleteButton from "./DeleteButton";
import styles from './Item.module.sass';

const Item = ({id, image, title, subtitle, quantity, item_price}) => (
  <div key={id} className={styles.item}>
    <div className={`${styles.flex} ${styles.itemInfo}`}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={image} alt="delete"/>
      </div>
      <div className={styles.descr}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>

    <div className={`${styles.flex} ${styles.alignCenter} ${styles.priceQuantity}`}>
      <QuantityField id={id} quantity={quantity}/>
      <DeleteButton id={id}/>
      <div className={styles.wrapperPrice}>
        <p className={styles.itemPrice}>{(item_price * quantity).toFixed(2)} €</p>
      </div>
    </div>
  </div>
);

export default Item;