/* eslint-disable */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RecordDetail from "../components/RecordDetail";

export default function StockDetails() {
  const { id } = useParams();
  const records = useSelector((state) => state.userGetRecords.records);
  const selectedRecord = records.filter(record => record.id == id )
  console.log("id from REcordDeatils");
  console.log(id);
  console.log("id from REcordDeatils");
  const dispatch = useDispatch();
  console.log("selectedRecords")
  console.log(selectedRecord)
  console.log("selectedRecords")
  console.log("records");
  console.log(records);
  console.log("records");
  // useEffect(() => {
  //   dispatch(fetchrecords(id));
  // }, [dispatch]);

  return (
      <RecordDetail selectedRecord={selectedRecord[0]} />
  );
}
