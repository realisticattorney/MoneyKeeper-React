/* eslint-disable */
import Axios from "axios";
const url = "https://degrassi-poppy-80494.herokuapp.com/";
export const getAccountsRequest = () => ({
  type: "FETCH_GET_ACCOUNT_REQUEST",
});

export const getAccountsSuccess = (accounts) => ({
  type: "FETCH_GET_ACCOUNT_SUCCESS",
  payload: accounts,
});
export const getAccountsFailure = (error) => ({
  type: "FETCH_GET_ACCOUNT_FAILURE",
  payload: error,
});

export const fetchGetAccount = (token) => (dispatch) => {
  const AuthStr = "Bearer ".concat(token);
  dispatch(getAccountsRequest());
  Axios.get("https://degrassi-poppy-80494.herokuapp.com/accounts", {
    headers: { Authorization: AuthStr },
  })
    .then((response) => {
      console.log("FETCH GET SUCCESS ");
      console.log(response);
      console.log("FETCH GET SUCCESS ");
      dispatch(getAccountsSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getAccountsFailure(error.message));
    });
};
