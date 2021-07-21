import { URL_AUTH_SIGNUP } from '../../constants/database';

export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_SIGNUP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
    });

    if (!response.ok) throw new Error('No se ha podido registrar');

    const resData = await response.json();
    dispatch({ type: SIGNUP, token: resData.idToken, user: resData.localId });
  }
}