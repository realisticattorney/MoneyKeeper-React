/* eslint-disable */

const initialState = [];

const getAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GET_ACCOUNT_SUCCESS":
      console.log(action.payload)
      return {
        ...state,
        _id: action.payload.id,
        created_by: action.payload.created_by,
        created_at: action.payload.created_at,
      };
    case "FETCH_GET_ACCOUNT_REQUEST":
      return {
        ...state,
        loading: false,
        stocks: action.payload,
      };
    case "FETCH_GET_ACCOUNT_FAILURE":
      return {
        ...state,
        loading: false,
        stocks: action.error,
      };
    default:
      return state;
  }
};

export default getAccountsReducer;
