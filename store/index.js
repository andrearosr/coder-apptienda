import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
});

export default createStore(RootReducer);