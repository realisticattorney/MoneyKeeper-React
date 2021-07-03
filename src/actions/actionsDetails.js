import axios from "axios";
import api from "./APIkeys";

export const fetchSelectedStockRequest = () => ({
  type: "FETCH_SEL_STOCK_REQUEST",
});

export const fetchSelectedStockSuccess = (selectedStock) => ({
  type: "FETCH_SEL_STOCK_SUCCESS",
  payload: selectedStock,
});

export const fetchSelectedStockFailure = (error) => ({
  type: "FETCH_SEL_STOCK_FAILURE",
  payload: error,
});

export const fetchSelectedStock = (symbol) => (dispatch) => {
  dispatch(fetchSelectedStockRequest());
  axios
    .get(
      `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=${api}`,
      { mode: "cors" }
    )
    .then((response) => {
      const { data } = response;
      dispatch(fetchSelectedStockSuccess(data[0]));
    })
    .catch((error) => {
      dispatch(fetchSelectedStockFailure(error.message));
    });
};
