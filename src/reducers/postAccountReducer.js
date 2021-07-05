/* eslint-disable */
const initialState = {};

const postAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_ACCOUNT_SUCCESS":
      console.log(action.payload);
      console.log("POST SUCESSSSS")
      return {
        ...state,
        _id: action.payload.id,
        created_by: action.payload.created_by,
        created_at: action.payload.created_at,
      };
    case "FETCH_POST_ACCOUNT_REQUEST":
      return {
        ...state,
        loading: false,
        stocks: action.payload,
      };
    case "FETCH_POST_ACCOUNT_FAILURE":
      return {
        ...state,
        loading: false,
        stocks: action.error,
      };
    default:
      return state;
  }
};

export default postAccountReducer;