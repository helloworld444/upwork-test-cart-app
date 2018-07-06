import calculateTotal from "./calculateTotal";

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const required = value => !value && 'Please fill the field';
export const min3Length = value => value.length < 3 && 'Please enter more than 3 chars';
export const min9Length = value => value && value.length !== 9 && 'Please enter 9 chars or leave the field empty';
export const email = value => !EMAIL_REGEX.test(value.toLowerCase()) && 'Invalid e-mail';
export const freeShipping = items => value =>
  (calculateTotal(items) <= 200 || items.length > 3) && value === "0" && 'Free shipping avaiable only when the total cart sum > 200.00 € and for 3 or less products';