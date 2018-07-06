import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import cart from "./cart";

export default combineReducers({
  form,
  cart
});
