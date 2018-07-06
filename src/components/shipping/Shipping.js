import React from 'react';
import {connect} from "react-redux";
import {reduxForm} from "redux-form";
import TextField from "./TextField";
import {email, freeShipping, min3Length, min9Length, required} from "../../utils/validate";
import ShippingOptionField from "./ShippingOptionField";

import styles from './Shipping.module.sass'

const Shipping = ({items, invalid}) => (
  <div className={styles.wrapperShipping}>
    <TextField name="name" placeholder="Name*" validate={[required, min3Length]}/>
    <TextField name="address" placeholder="Address*" validate={required}/>
    <TextField name="phone" placeholder="Phone" validate={min9Length}/>
    <TextField name="email" placeholder="E-mail" validate={[required, email]}/>
    <ShippingOptionField name="options" placeholder="Shipping options" items={items} validate={freeShipping(items)}/>
    <button className={invalid ? styles.buttonDisabled : styles.button} disabled={invalid}>Pay</button>
  </div>
);

const ShippingForm = reduxForm({form: 'shipping'})(Shipping);

export default connect(({cart: {items}}) => ({
  items,
  initialValue: {options: items.length > 3 ? '1' : '0'}
}), {})(ShippingForm);