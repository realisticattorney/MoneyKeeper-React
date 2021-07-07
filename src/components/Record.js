/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Record({ record, account_id }) {
  const { amount, flow_direction, frequency, pending, category, id, description } = record;

  return (
    <Link className="nav-link" to={`/accounts/${account_id}/records/${id}`}>
      <div className="book">
        <div className="left-side">
          <p className="category">{description}</p>
          <p className="author">{frequency.toUpperCase()}</p>
          <p className={`${pending == "yes" ? "pending-yes" : "pending-no"}`}>
            {pending.toUpperCase()}
          </p>
        </div>
        <div className="right-side">
          <p className="title" style={{
        backgroundColor: flow_direction == "income" ? "#327A6B" : "#f0797c" }}>{amount}</p>
          <p className="subtitle-record">{category}</p>
        </div>
      </div>
    </Link>
  );
}

Record.propTypes = {
  record: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    flow_direction: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pending: PropTypes.string.isRequired,
  }).isRequired,
};
export default Record;
