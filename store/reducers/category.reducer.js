import { CATEGORIES } from '../../data/categories';

const INITIAL_STATE = {
  categories: CATEGORIES,
  selected: null,
}

const CategoryReducer = (state = INITIAL_STATE, action) => {
  return { ...state };
}

export default CategoryReducer;