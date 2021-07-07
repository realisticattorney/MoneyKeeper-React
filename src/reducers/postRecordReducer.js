/* eslint-disable */
const initialState = {
  user_records: localStorage.getItem("userRecords")}
;

const postRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_POST_RECORD_SUCCESS":
      console.log(action.payload);
      console.log("RECORD POST SUCESSSSS");
      let existing = localStorage.getItem("userRecords");
      existing = existing ? existing.split(",") : [];
      existing.push(action.payload.data);
      localStorage.setItem("userRecords", existing.toString());
      return {
        ...state.userRecords,
        user_records: [action.payload.data],
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
    case "FETCH_DELETE_RECORD_SUCCESS":
      console.log(action.payload)
      console.log(action.payload)
      console.log(action.payload)
    return {
      ...state.userGetRecords,
      records: state.userGetRecords.records.filter(
        (item) => item.id !== action.payload
      ),
    };
    default:
      return state;
  }
};

export default postRecordReducer;
