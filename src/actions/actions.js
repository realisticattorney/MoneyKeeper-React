/* eslint-disable */
import Axios from "axios";
import api from "./APIkeys";

export const stocksRequest = () => ({
  type: "FETCH_STOCKS_REQUEST",
});

export const stockSuccess = (stocks) => ({
  type: "FETCH_STOCKS_SUCCESS",
  payload: stocks,
});
export const stocksFailure = (error) => ({
  type: "FETCH_STOCKS_FAILURE",
  payload: error,
});

export const fetchStocks = (sectorURL) => (dispatch) => {
  let sector = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&sector=Technology&limit=40&apikey=${api}`;
  if (sectorURL === "Application")
    sector = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&industry=Software—Application&sector=Technology&limit=40&apikey=${api}`;
  if (sectorURL === "Infrastructure")
    sector = `https://financialmodelingprep.com/api/v3/stock-screener?marketCapMoreThan=10000000000&industry=Software—Infrastructure&sector=Technology&limit=40&apikey=${api}`;

  dispatch(stocksRequest());
  Axios.get(sector, { mode: "cors" })
    .then((response) => {
      const { data } = response;
      dispatch(stockSuccess(data));
    })
    .catch((error) => {
      dispatch(stocksFailure(error.message));
    });
};
