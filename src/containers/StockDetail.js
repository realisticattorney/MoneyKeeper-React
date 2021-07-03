import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import StockDetail from "../components/StockDetail";
import { fetchSelectedStock } from "../actions/actionsDetail";

export default function StockDetails() {
  const { symbol } = useParams();
  const dispatch = useDispatch();
  const { selectedStock } = useSelector((state) => state.selectedStock);
  const loading = useSelector((state) => state.selectedStock.loading);

  useEffect(() => {
    dispatch(fetchSelectedStock(symbol));
  }, [dispatch]);

  // eslint-disable-next-line no-nested-ternary
  return loading ? (
    <h2 className="text-center pt-5">Loading</h2>
  ) : selectedStock === undefined ? (
    <h2 className="text-center pt-5 pb-5">Stock Item Not Found!</h2>
  ) : (
    <StockDetail selectedStock={selectedStock} />
  );
}
