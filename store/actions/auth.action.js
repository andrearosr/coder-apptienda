import { URL_AUTH_API, URL_UPDATE_API, URL_LOOKUP_API } from '../../constants/database';

export const SIGNUP = 'SIGNUP';
export const LOOKUP = 'LOOKUP';

export const signup = (name, email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_API, {
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

    const data = await response.json();

    const updateResponse = await fetch(URL_UPDATE_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken: data.idToken,
        displayName: name,
      }),
    });

    const userData = await updateResponse.json();

    dispatch({
      type: SIGNUP,
      token: data.idToken,
      userId: data.localId,
    });
  }
}

export const lookupUser = (token) => {
  return async dispatch => {
    const response = await fetch(URL_LOOKUP_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        idToken: token,
      }),
    });

    const data = await response.json();

    dispatch({
      type: LOOKUP,
      data,
    });
  }
}