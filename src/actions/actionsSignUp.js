import Axios from "axios";

export const signupRequest = () => ({
  type: "FETCH_SIGNUP_REQUEST",
});

export const signupSuccess = (token, user) => ({
  type: "FETCH_SIGNUP_SUCCESS",
  payload: { token, user },
});
export const signupFailure = (error) => ({
  type: "FETCH_SIGNUP_FAILURE",
  payload: error,
});

export const fetchSignUp = (user) => (dispatch) => {
  dispatch(signupRequest());
  Axios.post("https://degrassi-poppy-80494.herokuapp.com/signup", user)
    .then((response) => {
      const { data } = response;
      localStorage.setItem("token", data.auth_token);
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      dispatch(signupSuccess(data.auth_token, user));
    })
    .catch((error) => {
      dispatch(signupFailure(error.message));
    });
};
