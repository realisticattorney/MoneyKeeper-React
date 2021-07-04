/* eslint-disable */
import jwtDecode from 'jwt-decode'

const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
};

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STOCKS_SUCCESS":
      const user = jwtDecode(action.payload.token)
      console.log(user)
      console.log(user)
      console.log(user)
      return {
        ...state,
        token: action.payload.token,
        name: action.payload.user.name,
        email: action.payload.user.email,
        exp: user.exp,
        _id: user.user_id,
      };
    case "FETCH_STOCKS_REQUEST":
      return {
        ...state,
        loading: false,
        stocks: action.payload,
      };
    case "FETCH_STOCKS_FAILURE":
      return {
        ...state,
        loading: false,
        stocks: action.error,
      };
    default:
      return state;
  }
};

export default stocksReducer;
