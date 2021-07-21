import { URL_AUTH_SIGNUP } from '../../constants/database';

export const SIGNUP = 'SIGNUP';

const errorMessages = {
  INVALID_EMAIL: 'Email inválido',
  EMAIL_EXISTS: 'Email ya se encuentra registrado',
};

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

    if (!response.ok) {
      const resData = await response.json();
      const errorCode = resData.error.message;
      const errorMessage = errorCode in errorMessages
        ? errorMessages[errorCode]
        : 'No se ha podido registrar';

      throw new Error(errorMessage);
    }

    const resData = await response.json();
    dispatch({ type: SIGNUP, token: resData.idToken, user: resData.localId });
  }
}