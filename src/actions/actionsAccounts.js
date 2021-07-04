/* eslint-disable */
import Axios from "axios";
const url = "https://degrassi-poppy-80494.herokuapp.com/";
export const getUsersRequest = () => ({
  type: "FETCH_GET_ACCOUNT_REQUEST",
});

export const getUsersSuccess = (accounts) => ({
  type: "FETCH_GET_ACCOUNT_SUCCESS",
  payload: accounts,
});
export const getUsersFailure = (error) => ({
  type: "FETCH_GET_ACCOUNT_FAILURE",
  payload: error,
});

export const fetchGetAccount = (token) => (dispatch) => {
  dispatch(getUsersRequest());
  Axios.get("https://degrassi-poppy-80494.herokuapp.com/accounts", {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      console.log("getAccounts:" `${response}`);
      dispatch(getUsersSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(getUsersFailure(error.message));
    });
};
