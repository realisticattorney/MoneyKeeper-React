/* eslint-disable */
const initialState = [];
const getRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GET_RECORDS_SUCCESS":
      console.log(action.payload);
      console.log("RECORD GET SUCESSSSS");
    localStorage.setItem("userGetRecords", JSON.stringify(action.payload.data));
      return {
        ...state.userGetRecords,
        records: action.payload.data,
      };
    case "FETCH_POST_RECORDS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POST_RECORDS_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default getRecordReducer;
