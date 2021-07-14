import { BREADS } from '../../data/breads';

const INITIAL_STATE = {
  breads: BREADS,
  filteredBreads: [],
  selected: null,
}

const BreadReducer = (state = INITIAL_STATE, action) => {
  return { ...state };
}

export default BreadReducer;