/* eslint-disable */
import Axios from "axios";
const url = "https://degrassi-poppy-80494.herokuapp.com/";
export const stocksRequest = () => ({
  type: "FETCH_AUTH_REQUEST",
});

export const fetchUsers = (stocks) => ({
  type: "FETCH_STOCKS_SUCCESS",
  payload: stocks,
});
export const stocksFailure = (error) => ({
  type: "FETCH_STOCKS_FAILURE",
  payload: error,
});

export const fetchSignUp = (user) => (dispatch) => {
  dispatch(stocksRequest());
  Axios.post("https://degrassi-poppy-80494.herokuapp.com/signup", 
  // { mode: 'cors' }, 
  user, 
  // {  headers: { "Content-type": "application/json; charset=UTF-8" }}
  )
    .then((response) => {
      console.log(response)
      const { data } = response;
      dispatch(stockSuccess(data));
    })
    .catch((error) => {
      console.log(error);
      dispatch(stocksFailure(error.message));
    });


  // fetch(`${url}signup`, {
  //   method: 'post',
  //   body: JSON.stringify({ username }),
  //   headers: { 'Content-type': 'application/json; charset=UTF-8' },
  // })
  //   .then((res) => res.json())
  //   .then((response) => {
  //     if (response.message === 'Validation failed: Username has already been taken') {
  //       console.log(response)
  //       dispatch(fetchUsers(username));
  //     }
  //     if (response.message === "Validation failed: Username can't be blank") {
  //       console.log(response);
  //       return null;
  //     }
  //     if (response.id) {
  //       console.log(response);
  //       dispatch(fetchUsers(username));
  //     }
  //     return null;
  //   }).catch((err) => { throw Error(`Error: ${err}`); });
};
