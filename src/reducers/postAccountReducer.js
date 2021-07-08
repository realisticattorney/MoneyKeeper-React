const initialState = {
  loading: false,
  accountId: localStorage.getItem('accountId'),
  created_by: localStorage.getItem('created_by'),
  created_at: localStorage.getItem('created_at'),
};

const postAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POST_ACCOUNT_SUCCESS':
      localStorage.setItem('accountId', action.payload.data.id);
      localStorage.setItem('created_by', action.payload.data.created_by);
      localStorage.setItem('created_at', action.payload.data.created_at);
      return {
        ...state,
        accountId: action.payload.data.id,
        created_by: action.payload.data.created_by,
        created_at: action.payload.data.created_at,
        loading: true,
      };
    case 'FETCH_POST_ACCOUNT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_POST_ACCOUNT_FAILURE':
      return {
        ...state,
        loading: false,
      };
    case 'FETCH_GET_SET_ACCOUNT_SUCCESS':
      localStorage.setItem('accountId', action.payload.data[0].id);
      localStorage.setItem('created_by', action.payload.data[0].created_by);
      localStorage.setItem('created_at', action.payload.data[0].created_at);
      return {
        ...state,
        accountId: action.payload.data[0].id,
        created_by: action.payload.data[0].created_by,
        created_at: action.payload.data[0].created_at,
        loading: true,
      };
    case 'FETCH_GET_SET_ACCOUNT_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_GET_SET_ACCOUNT_FAILURE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postAccountReducer;
