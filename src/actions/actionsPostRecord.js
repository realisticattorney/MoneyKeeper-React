/* eslint-disable */
import Axios from "axios";
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

export const fetchPostRecord = (data) => (dispatch) => {
  const account_id = localStorage.getItem("account_id")
  console.log("DATA")
  console.log(data)
  console.log("DATA")
  console.log("account_id")
  console.log(account_id)
  console.log("account_id")
  const token = localStorage.getItem("token")
  dispatch(postRecordRequest());
  Axios.post(
    `https://degrassi-poppy-80494.herokuapp.com/accounts/${account_id}/records`,
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