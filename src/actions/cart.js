import {BACKEND_PATHS, BACKEND_URL} from "../utils/const";
import {CART_ITEMS_FETCH_FAILED, CART_ITEMS_FETCHED_SUCCESSFULLY, ITEM_DELETED, QUANTITY_CHANGED} from "./types";
import {toast} from "react-toastify";

export const fetchItems = () =>
  async dispatch => {
    const response = await fetch(`${BACKEND_URL}/${BACKEND_PATHS.CART}`);
    if (response.ok) {
      dispatch(itemsFetchedSuccessfully(await response.json()));
    } else {
      toast.error(`${response.status} Something went wrong! Try again`);
      dispatch(itemsFetchFailed());
    }
  };

const itemsFetchedSuccessfully = items => ({type: CART_ITEMS_FETCHED_SUCCESSFULLY, items});
const itemsFetchFailed = () => ({type: CART_ITEMS_FETCH_FAILED});

export const changeQuantity = (id, diff) => ({type: QUANTITY_CHANGED, id, diff});

export const deleteItem = id => ({type: ITEM_DELETED, id});