const initialState = [];
const getRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GET_RECORDS_SUCCESS":
      localStorage.setItem(
        "userGetRecords",
        JSON.stringify(action.payload.data)
      );
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
    case "FETCH_DELETE_RECORD_SUCCESS":
      return {
        ...state.userGetRecords,
        userGetRecords: {
          ...state.userGetRecords.records,
          records: state.userGetRecords.records.filter(
            (item) => item.id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default getRecordReducer;
