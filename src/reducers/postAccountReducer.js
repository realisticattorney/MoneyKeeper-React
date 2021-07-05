/* eslint-disable */
const initialState = {};

const postAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_ACCOUNT_SUCCESS":
      console.log(action.payload);
      console.log("POST SUCESSSSS")
      return {
        ...state,
        _id: action.payload.data.id,
        created_by: action.payload.data.created_by,
        created_at: action.payload.data.created_at,
        loading: true,
      };
    case "FETCH_POST_ACCOUNT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POST_ACCOUNT_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postAccountReducer;