/* eslint-disable */
import Axios from "axios";
const url = "https://degrassi-poppy-80494.herokuapp.com/";
export const postRecordRequest = () => ({
  type: "FETCH_POST_RECORD_REQUEST",
});

export const postRecordSuccess = (records) => ({
  type: "FETCH_POST_RECORD_SUCCESS",
  payload: records,
});
export const postRecordFailure = (error) => ({
  type: "FETCH_POST_RECORD_FAILURE",
  payload: error,
});

export const fetchPostRecord = (created_by, data) => (dispatch) => {
  const token = localStorage.getItem("token")
  dispatch(postRecordRequest());
  Axios.post(
    `https://degrassi-poppy-80494.herokuapp.com/accounts/${created_by}/records`,
    data,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((response) => {
      console.log("FETCH POST WORKS");
      console.log(response);
      console.log("FETCH POST WORKS");
      dispatch(postRecordSuccess(response));
    })
    .catch((error) => {
      console.log(error);
      dispatch(postRecordFailure(error.message));
    });
};
