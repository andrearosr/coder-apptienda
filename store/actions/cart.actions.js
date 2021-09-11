import api from '../../api';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART';

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID,
});

export const confirmCart = (payload) => {
  return async dispatch => {
    try {
      dispatch({
        type: CONFIRM_CART,
        status: 'loading',
      });

      const response = await api.post('/carrito.json', {
        data: JSON.stringify({
          date: Date.now(),
          items: { ...payload },
        }),
      });

      const result = response.data;

      console.log(result)

      dispatch({
        type: CONFIRM_CART,
        status: 'success',
      });
    } catch (error) {
      console.log(error.message);
      dispatch({
        type: CONFIRM_CART,
        status: 'error',
      });
    }
  }
}
