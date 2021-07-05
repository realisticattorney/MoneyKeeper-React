/* eslint-disable */
import Axios from "axios";
const url = "https://degrassi-poppy-80494.herokuapp.com/";
export const postAccountRequest = () => ({
  type: "FETCH_POST_ACCOUNT_REQUEST",
});

export const postAccountSuccess = (accounts) => ({
  type: "FETCH_POST_ACCOUNT_SUCCESS",
  payload: accounts,
});
export const postAccountFailure = (error) => ({
  type: "FETCH_POST_ACCOUNT_FAILURE",
  payload: error,
});

export const fetchPostAccount = (token) => (dispatch) => {
  dispatch(postAccountRequest());
  Axios.post("https://degrassi-poppy-80494.herokuapp.com/accounts", null, {
    headers: { "Authorization": `Bearer ${token}` },
  })
    .then((response) => {
      console.log("FETCH POST WORKS")
      console.log(response);
      console.log("FETCH POST WORKS")
      dispatch(postAccountSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(postAccountFailure(error.message));
    });
};