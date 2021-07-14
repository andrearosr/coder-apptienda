export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTER_BREAD = 'FILTERED_BREAD';

export const selectBread = (id) => ({
  type: SELECT_BREAD,
  breadID: id,
})

export const filterBread = (id) => ({
  type: FILTER_BREAD,
  categoryID: id,
})