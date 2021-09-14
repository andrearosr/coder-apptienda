import { URL_AUTH_API } from '../../constants/database';

export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_API, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json();

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  }
}