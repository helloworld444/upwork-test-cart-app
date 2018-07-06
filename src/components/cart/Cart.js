import React, {Component} from 'react';
import {fetchItems} from "../../actions/cart";
import {connect} from "react-redux";
import Item from "./Item";
import {Link} from "react-router-dom";
import {ROUTES} from "../../utils/const";
import calculateTotal from "../../utils/calculateTotal";

import styles from './Cart.module.sass';

class Cart extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const {items} = this.props;
    return (
      <div className={styles.cart}>
        {items.map(Item)}
        <p className={styles.price}>{calculateTotal(items)} €</p>
        <Link className={styles.cartBuy} to={ROUTES.SHIPPING}>BUY</Link>
      </div>
    )
  }
}

export default connect(({cart: {items}}) => ({items}), {fetchItems})(Cart);

