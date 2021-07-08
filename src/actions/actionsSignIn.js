/* eslntdisable */

import Axios from 'axios';

export const loginRequest = () => ({
  type: 'FETCH_LOGIN_REQUEST',
});

export const loginkSuccess = (token, user) => ({
  type: 'FETCH_LOGIN_SUCCESS',
  payload: { token, user },
});
export const loginFailure = (error) => ({
  type: 'FETCH_LOGIN_FAILURE',
  payload: error,
});

export const fetchSignIn = (user) => (dispatch) => {
  dispatch(loginRequest());
  Axios.post('https://degrassi-poppy-80494.herokuapp.com/auth/login', user)
    .then((response) => {
      const { data } = response;
      localStorage.setItem('token', data.auth_token);
      localStorage.setItem('name', user.name);
      localStorage.setItem('email', user.email);
      console.log(data.auth_token);
      dispatch(loginkSuccess(data.auth_token, user));
    })
    .catch((error) => {
      dispatch(loginFailure(error.message));
    });
};
