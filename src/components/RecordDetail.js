/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";

const StockDetail = ({ selectedStock }) => (
  <div className="det">
    <div className="det-top">
      <p className="det-top-title"> {selectedStock.companyName}</p>
      <p className="det-top-subtitle"> {selectedStock.symbol}</p>
    </div>
    <div className="det-middle">
      <div className="det-left-side">
        <p className="det-price"> {selectedStock.price}</p>
      </div>
      <div className="det-right-side">
        <p>
          {" "}
          Industry:
          {selectedStock.industry}
        </p>
        <p>
          {" "}
          Country:
          {selectedStock.country}
        </p>
        <p>
          {" "}
          Sector:
          {selectedStock.sector}
        </p>
      </div>
    </div>
  </div>
);

StockDetail.propTypes = {
  selectedStock: PropTypes.shape({
    symbol: PropTypes.string,
    price: PropTypes.number,
    country: PropTypes.string,
    sector: PropTypes.string,
    companyName: PropTypes.string,
    industry: PropTypes.string,
  }),
};

StockDetail.defaultProps = {
  selectedStock: {},
};

export default StockDetail;
