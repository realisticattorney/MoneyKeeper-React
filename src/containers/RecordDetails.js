/* eslint-disable */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StockDetail from "../components/RecordDetail";
// import { fetchrecords } from "../actions/actionsDetail";

export default function StockDetails() {
  const { id } = useParams();
  console.log("id from REcordDeatils");
  console.log(id);
  console.log("id from REcordDeatils");
  const dispatch = useDispatch();
  const { records } = useSelector((state) => state.userGetRecords.records);
  console.log("records");
  console.log(records);
  console.log("records");
  // useEffect(() => {
  //   dispatch(fetchrecords(id));
  // }, [dispatch]);

  // eslint-disable-next-line no-nested-ternary
  return (
    //   <h2 className="text-center pt-5">Loading</h2>
    // ) : records === undefined ? (
    //   <h2 className="text-center pt-5 pb-5">Stock Item Not Found!</h2>
    // ) : (
    //   <StockDetail records={records} />
    <div>lalalaa</div>
  );
}
