const initialState = {
  loading: false,
  token: localStorage.getItem('token'),
  name: localStorage.getItem('name'),
  email: localStorage.getItem('email'),
};

const signReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_SIGNUP_SUCCESS':
    case 'FETCH_LOGIN_SUCCESS':
      return {
        ...state,
        loading: true,
        token: action.payload.token,
        name: action.payload.user.name,
        email: action.payload.user.email,
      };
    case 'FETCH_SIGNUP_REQUEST':
    case 'FETCH_LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      };
    case 'FETCH_SIGNUP_FAILURE':
    case 'FETCH_LOGIN_FAILURE':
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default signReducer;
