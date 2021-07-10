/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RecordDetail from "../components/RecordDetail";

export default function StockDetails() {
  const { id } = useParams();
  const getRecordLocal = JSON.parse(localStorage.getItem("recordsLocal"));
  console.log(getRecordLocal)
  const selectedRecord = getRecordLocal.filter(
    (record) => record.id.toString() === id
  );
  return <RecordDetail selectedRecord={selectedRecord[0]} />;
}
