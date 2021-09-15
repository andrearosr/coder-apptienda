import { SIGNUP, LOOKUP } from '../actions/auth.action';

const INITIAL_STATE = {
  token: null,
  userId: null,
  data: null,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case LOOKUP:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

export default AuthReducer;