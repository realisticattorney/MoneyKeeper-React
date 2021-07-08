import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Record({ record, accountId }) {
  const { amount, frequency, pending, category, id, description } = record;

  const flowDirection = record.flow_direction;

  return (
    <Link className="nav-link" to={`/accounts/${accountId}/records/${id}`}>
      <div className="book">
        <div className="left-side">
          <p className="category">{description}</p>
          <p className="author">{frequency.toUpperCase()}</p>
          <p className={`${pending === "yes" ? "pending-yes" : "pending-no"}`}>
            {pending.toUpperCase()}
          </p>
        </div>
        <div className="right-side">
          <p
            className="title"
            style={{
              backgroundColor:
                flowDirection === "income" ? "#327A6B" : "#f0797c",
            }}
          >
            {amount}
          </p>
          <p className="subtitle-record">{category}</p>
        </div>
      </div>
    </Link>
  );
}

Record.propTypes = {
  record: PropTypes.shape({
    amount: PropTypes.number.isRequired,
    flowDirection: PropTypes.string.isRequired,
    flow_direction: PropTypes.string.isRequired,
    frequency: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    pending: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  accountId: PropTypes.number.isRequired,
};
export default Record;
