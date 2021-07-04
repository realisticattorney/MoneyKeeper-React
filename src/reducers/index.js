/* eslint-disable */
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import stocksRed from "./reducer";
import getAccounts from "./accountsReducer";

export const rootReducer = combineReducers({
  allStocks: stocksRed,
  allAccounts: getAccounts,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
