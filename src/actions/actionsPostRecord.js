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



export const deleteRecordSuccess = (record) => ({
  type: "FETCH_DELETE_RECORD_SUCCESS",
  payload: record,
});

export const deleteRecord = (selectedRecord) => (dispatch) => {
  const account_id = selectedRecord.account_id;
  const token = localStorage.getItem("token");
  const record_id = selectedRecord.id;

  Axios.delete(
    `https://degrassi-poppy-80494.herokuapp.com/accounts/${account_id}/records/${record_id}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  )
    .then((response) => {
      console.log("DELETE record");
      console.log(response);
      console.log("DELETE record");
      dispatch(deleteRecordSuccess(record_id));
    })
    .catch((error) => {
      console.log(error);
    });
};
