/* eslint-disable */
import Axios from "axios";
export const getRecordsRequest = () => ({
  type: "FETCH_GET_RECORDS_REQUEST",
});

export const getRecordsSuccess = (records) => ({
  type: "FETCH_GET_RECORDS_SUCCESS",
  payload: records,
});
export const getRecordsFailure = (error) => ({
  type: "FETCH_GET_RECORDS_FAILURE",
  payload: error,
});

export const fetchGetRecords = (account_id) => (dispatch) => {
  const token = localStorage.getItem("token");
  dispatch(getRecordsRequest());
  Axios.get(
    `https://degrassi-poppy-80494.herokuapp.com/accounts/${account_id}/records`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((response) => {
      dispatch(getRecordsSuccess(response));
    })
    .catch((error) => {
      dispatch(getRecordsFailure(error.message));
    });
};
