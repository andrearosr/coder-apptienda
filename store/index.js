import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import reactotron from '../ReactotronConfig';
import CategoryReducer from "./reducers/category.reducer";
import BreadsReducer from "./reducers/bread.reducer";
import CartReducer from './reducers/cart.reducer';
import AuthReducer from './reducers/auth.reducer';

const RootReducer = combineReducers({
  categories: CategoryReducer,
  breads: BreadsReducer,
  cart: CartReducer,
  auth: AuthReducer,
});

export default createStore(
  RootReducer,
  compose(
    applyMiddleware(thunk),
    reactotron.createEnhancer(),
  ),
);