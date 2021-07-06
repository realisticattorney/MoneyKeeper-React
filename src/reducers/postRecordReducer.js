/* eslint-disable */
const initialState = {};

const postRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_RECORD_SUCCESS":
      console.log(action.payload);
      console.log("RECORD POST SUCESSSSS");
      return {
        ...state,
        flow_direction: action.payload.data.flow_direction,
        frequency: action.payload.data.frequency,
        time_span: action.payload.data.time_span,
        pending: action.payload.data.pending,
        category: action.payload.data.category,
        description: action.payload.data.description,
      };
    case "FETCH_POST_RECORD_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POST_RECORD_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postRecordReducer;
