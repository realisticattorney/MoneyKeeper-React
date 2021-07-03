/* eslint-disable */
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import stocksRed from "./reducer";
import selStockRed from "./itemReducer";

export const rootReducer = combineReducers({
  allStocks: stocksRed,
  selectedStock: selStockRed,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
