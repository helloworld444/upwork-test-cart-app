import React from 'react';
import {connect} from "react-redux";
import {deleteItem} from "../../actions/cart";
import styles from './Item.module.sass';

const handleClick = (id, deleteItem) => () => deleteItem(id);

const DeleteButton = ({id, deleteItem}) => (
  <button className={styles.deleteBtn} onClick={handleClick(id, deleteItem)}></button>

);

export default connect(null, {deleteItem})(DeleteButton);