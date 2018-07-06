import React from "react";
import {Field} from "redux-form";
import {SHIPPING_OPTIONS} from "../../utils/const";

import styles from './ShippingOptionField.module.sass';

const renderOption = ({id, name, value, disabled}) => (
  <option key={id} value={value} disabled={disabled}>{name} {value}</option>
);

const disableFirstOptionIfNeeded = items => [
  {
    ...SHIPPING_OPTIONS[0],
    disabled: items.length > 3
  },
  ...SHIPPING_OPTIONS.slice(1)
];


const WrappedSelect = ({placeholder, items, input, meta: {error}, ...props}) => (
  <div className={styles.inputWrapper}>
    <p className={styles.inputText}>{placeholder}</p>
    <div>
      <select
        className={styles.input}
        {...input}
        {...props}

      >
        {disableFirstOptionIfNeeded(items).map(renderOption)}
      </select>
      {error && (
        <p className={styles.freeError}>{error}</p>
      )}
    </div>
  </div>
);

const ShippingOptionField = ({items, ...props}) => (
  <Field
    component={WrappedSelect}
    items={items}
    {...props}
  />
);

export default ShippingOptionField;
