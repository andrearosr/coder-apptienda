export const ADD_ITEM = 'ADD_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = item => ({
  type: ADD_ITEM,
  item,
});

export const deleteItem = itemID => ({
  type: DELETE_ITEM,
  itemID,
});

export const confirmCart = () => ({
  type: CONFIRM_CART,
});