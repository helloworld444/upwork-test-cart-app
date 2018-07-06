import React from 'react';
import {connect} from "react-redux";
import {changeQuantity} from "../../actions/cart";

import styles from './QuantityField.module.sass';

const handleClick = (id, diff, changeQuantity) => () => changeQuantity(id, diff);

const QuantityField = ({id, quantity, changeQuantity}) => (
  <div className={styles.quantityField}>
    <button className={styles.buttonItem} onClick={handleClick(id, -1, changeQuantity)} disabled={quantity === 0}>-</button>
    <span className={styles.quantity}>{quantity}</span>
    <button className={styles.buttonItem} onClick={handleClick(id, 1, changeQuantity)}>+</button>
  </div>
);

export default connect(null, {changeQuantity})(QuantityField);