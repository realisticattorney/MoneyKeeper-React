/* eslint-disable */

const initialState = {
  loading: false,
  selectedStock: {},
  error: "",
};

const selectedStockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SEL_STOCK_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SEL_STOCK_SUCCESS":
      return {
        ...state,
        loading: false,
        selectedStock: action.payload,
        error: "",
      };
    case "FETCH_SEL_STOCK_FAILURE":
      return {
        ...state,
        loading: false,
        selectedStock: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default selectedStockReducer;
