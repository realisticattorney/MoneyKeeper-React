/* eslntdisable */
const initialState = {
  user_records: localStorage.getItem('userRecords'),
};
const postRecordReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POST_RECORD_SUCCESS':
      let existing = localStorage.getItem('userRecords');
      existing = existing ? existing.split(',') : [];
      existing.push(action.payload.data);
      localStorage.setItem('userRecords', existing.toString());
      return {
        ...state.userRecords,
        user_records: [action.payload.data],
      };
    case 'FETCH_POST_RECORD_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_POST_RECORD_FAILURE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postRecordReducer;
