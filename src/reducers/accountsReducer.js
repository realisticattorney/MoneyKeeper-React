/* eslint-disable */

const initialState = [];

const getAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GET_ACCOUNT_SUCCESS":
      console.log(action.payload.data)
      console.log("GET SUCEEEEEEES")
      return {
        ...state,
        _id: action.payload.data[0].id,
        created_by: action.payload.data[0].created_by,
        created_at: action.payload.data[0].created_at,
      };
    case "FETCH_GET_ACCOUNT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_GET_ACCOUNT_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default getAccountsReducer;
