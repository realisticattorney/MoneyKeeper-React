/* eslint-diable */
import Axios from 'axios';

export const getAccountsRequest = () => ({
  type: 'FETCH_GET_ACCOUNT_REQUEST',
});

export const getAccountsSuccess = (accounts) => ({
  type: 'FETCH_GET_ACCOUNT_SUCCESS',
  payload: accounts,
});
export const getAccountsFailure = (error) => ({
  type: 'FETCH_GET_ACCOUNT_FAILURE',
  payload: error,
});

export const getSetAccountsRequest = () => ({
  type: 'FETCH_GET_SET_ACCOUNT_REQUEST',
});
export const getSetAccountsSuccess = (accounts) => ({
  type: 'FETCH_GET_SET_ACCOUNT_SUCCESS',
  payload: accounts,
});
export const getSetAccountsFailure = (error) => ({
  type: 'FETCH_GET_SET_ACCOUNT_FAILURE',
  payload: error,
});

export const fetchGetAccount = (token) => (dispatch) => {
  const AuthStr = 'Bearer '.concat(token);
  dispatch(getAccountsRequest());
  Axios.get('https://degrassi-poppy-80494.herokuapp.com/accounts', {
    headers: { Authorization: AuthStr },
  })
    .then((response) => {
      dispatch(getAccountsSuccess(response));
    })
    .catch((error) => {
      dispatch(getAccountsFailure(error.message));
    });
};

export const fetchSetGetAccount = (token) => (dispatch) => {
  const AuthStr = 'Bearer '.concat(token);
  // dispatch(getSetAccountsRequest());
  Axios.get('https://degrassi-poppy-80494.herokuapp.com/accounts', {
    headers: { Authorization: AuthStr },
  })
    .then((response) => {
      dispatch(getSetAccountsSuccess(response));
    })
    .catch((error) => {
      dispatch(getSetAccountsFailure(error.message));
    });
};
