import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RecordDetail from "../components/RecordDetail";

export default function StockDetails() {
  const { id } = useParams();
  const records = useSelector((state) => state.userGetRecords.records);
  const selectedRecord = records.filter(
    (record) => record.id.toString() === id
  );
  return <RecordDetail selectedRecord={selectedRecord[0]} />;
}
