/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RecordDetail from "../components/RecordDetail";

export default function StockDetails() {
  // localStorage.setItem("recordsLocal", "");
  const { id } = useParams();
  // const records = useSelector((state) => state.userGetRecords.records);
  // localStorage.setItem("recordsLocal", JSON.stringify(records));
  const getRecordLocal = JSON.parse(localStorage.getItem("recordsLocal"));
  console.log(getRecordLocal)
  const selectedRecord = getRecordLocal.filter(
    (record) => record.id.toString() === id
  );
  return <RecordDetail selectedRecord={selectedRecord[0]} />;
}
