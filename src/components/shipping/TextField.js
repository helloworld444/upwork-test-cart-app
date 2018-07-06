import React from "react";
import {Field} from "redux-form";

import styles from './TextField.module.sass';

const WrappedTextInput = ({placeholder, input, meta: {touched, error}, ...props}) => (
  <div className={styles.inputWrapper}>
    <p className={styles.inputText}>{placeholder}</p>
    <div>
      <input
        className={touched && error ? `${styles.input} ${styles.input_red}` : styles.input}
        type="text"
        {...input}
        {...props}
      />
      {touched && error && (
        <p className={styles.inputError}>{error}</p>
      )}
    </div>
  </div>
);

const TextField = (props) => (
  <Field
    component={WrappedTextInput}
    {...props}
  />
);

export default TextField;
