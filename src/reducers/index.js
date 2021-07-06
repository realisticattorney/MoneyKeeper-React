/* eslint-disable */
import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import stocksRed from "./reducer";
import getAccounts from "./accountsReducer";
import postAccount from "./postAccountReducer";
import postRecord from "./postRecordReducer";

export const rootReducer = combineReducers({
  userInfo: stocksRed,
  allAccounts: getAccounts,
  userAccount: postAccount,
  userRecords: postRecord,
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
