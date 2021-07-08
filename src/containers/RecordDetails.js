/* eslint-disable */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RecordDetail from "../components/RecordDetail";

export default function StockDetails() {
  const { id } = useParams();
  const records = useSelector((state) => state.userGetRecords.records);
  const selectedRecord = records.filter(record => record.id == id )

  return (
      <RecordDetail selectedRecord={selectedRecord[0]} />
  );
}
