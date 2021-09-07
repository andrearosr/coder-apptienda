export const SELECT_BREAD = 'SELECT_BREAD';
export const FILTER_BREADS = 'FILTER_BREADS';

export const selectBread = (breadID) => ({
  type: SELECT_BREAD,
  breadID,
});

export const filterBreads = (categoryID) => ({
  type: FILTER_BREADS,
  categoryID,
})