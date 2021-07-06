/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

function Record({ record }) {
  const { amount, flow_direction, frequency, pending, category } = record;

  return (
    <a href={`/records/${flow_direction}`}>
      <div className="book">
        <div className="left-side">
          <p className="category">{category}</p>
          <p className="author">{frequency}</p>
          <p className="author">{pending}</p>
        </div>
        <div className="right-side">
          <p className="title">{amount}</p>
        </div>
      </div>
    </a>
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
