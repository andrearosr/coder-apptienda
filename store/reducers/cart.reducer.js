import { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } from '../actions/cart.actions';

const INITIAL_STATE = {
  items: [],
  total: 27000,
  status: 'inactive',
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: state.items.concat(action.item),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.itemID),
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