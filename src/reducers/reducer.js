/* eslint-disable */
import jwtDecode from 'jwt-decode'

const initialState = {
  loading: false,
  token: localStorage.getItem("token"),
  name: localStorage.getItem("name"),
  email: localStorage.getItem("email"),
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SIGNUP_SUCCESS":
      // const user = jwtDecode(action.payload.token)
      // console.log(user)
      // console.log(user)
      // console.log(user)
      return {
        ...state,
        loading: true,
        user: {
          token: action.payload.token,
          name: action.payload.user.name,
          email: action.payload.user.email,
        },
      };
    case "FETCH_SIGNUP_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SIGNUP_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default stocksReducer;
