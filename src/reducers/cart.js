import * as actions from "../actions/types";

const initialState = {
  items: [{id: 0, title: 'Loading', item_price: 0, quantity: 0}]
};

export default function cart(state = initialState, action) {
  switch (action.type) {
    case actions.CART_ITEMS_FETCHED_SUCCESSFULLY:
      return {
        ...state,
        items: action.items
      };
    case actions.QUANTITY_CHANGED: {
      const index = state.items.findIndex(i => i.id === action.id);
      const item = state.items[index];
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          {...item, quantity: item.quantity + action.diff},
          ...state.items.slice(index + 1)
        ]
      };
    }
    case actions.ITEM_DELETED: {
      const index = state.items.findIndex(i => i.id === action.id);
      return {
        ...state,
        items: [
          ...state.items.slice(0, index),
          ...state.items.slice(index + 1)
        ]
      };
    }
    default:
      return state;
  }
}
