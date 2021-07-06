/* eslint-disable */
import Axios from "axios";
export const loginRequest = () => ({
  type: "FETCH_LOGIN_REQUEST",
});

export const loginkSuccess = (token, user) => ({
  type: "FETCH_LOGIN_SUCCESS",
  payload: { token: token, user: user },
});
export const loginFailure = (error) => ({
  type: "FETCH_LOGIN_FAILURE",
  payload: error,
});

export const fetchSignIn = (user) => (dispatch) => {
  dispatch(loginRequest());
  Axios.post("https://degrassi-poppy-80494.herokuapp.com/auth/login", 
  user, 
  )
    .then((response) => {
      console.log(response)
      const { data } = response;
      localStorage.setItem("token", data.auth_token);
      console.log(data.auth_token);
      dispatch(loginSuccess(data.auth_token, user));
    })
    .catch((error) => {
      console.log(error);
      dispatch(loginFailure(error.message));
    });
};
