import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from '../actions/cart.actions';

const INITIAL_STATE = {
  items: [],
  total: 0,
  status: 'inactive',
};

const sumTotal = (list) => list
  .map(item => item.quantity * item.price)
  .reduce((a, b) => a + b, 0);

const CartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_ITEM:
      const index = state.items.findIndex(item => item.id === action.item.id);
      if (index === -1) {
        const item = { ...action.item, quantity: 1 };
        const updateCart = [...state.items, item];

        return {
          ...state,
          items: updateCart,
          total: sumTotal(updateCart),
        };
      }

      const items = state.items.map(item => {
        if (item.id === action.item.id) item.quantity ++
        return item;
      })

      return {
        ...state,
        items,
        total: sumTotal(items),
      };
    case REMOVE_ITEM:
      const updateItems = state.items.filter(item => item.id !== action.itemID);
      return {
        ...state,
        items: updateItems,
        total: sumTotal(updateItems),
      };
    case CONFIRM_CART:
      return {
        ...state,
        items: [],
        status: action.status,
      };
    default:
      return state;
  };
};

export default CartReducer;
