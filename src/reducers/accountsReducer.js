/* eslint-diable */
const initialState = [];

const getAccountsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GET_ACCOUNT_SUCCESS':
      return {
        ...state,
        accountId: action.payload.data[0].id,
        created_by: action.payload.data[0].created_by,
        created_at: action.payload.data[0].created_at,
      };
    case 'FETCH_GET_ACCOUNT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_GET_ACCOUNT_FAILURE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default getAccountsReducer;
