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
  const AuthStr = "Bearer ".concat(token);
  dispatch(postAccountRequest());
  Axios.post("https://degrassi-poppy-80494.herokuapp.com/accounts", {
    headers: { Authorization: AuthStr },
  })
    .then((response) => {
      console.log('POST FETCH SUCCEss');
      console.log(response);
      dispatch(postAccountSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(postAccountFailure(error.message));
    });
};
