/* eslint-disable */
const initialState = {
  loading: false,
  account_id: localStorage.getItem("account_id"),
  created_by: localStorage.getItem("created_by"),
  created_at: localStorage.getItem("created_at"),
};

const postAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_ACCOUNT_SUCCESS":
      console.log(action.payload);
      console.log("POST SUCESSSSS");
        localStorage.setItem("account_id", action.payload.data.id);
        localStorage.setItem("created_by", action.payload.data.created_by);
        localStorage.setItem("created_at", action.payload.data.created_at);
      return {
        ...state,
        account_id: action.payload.data.id,
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