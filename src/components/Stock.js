import React from "react";
import PropTypes from "prop-types";

function Stock({ stock }) {
  const { symbol, price, companyName } = stock;

  return (
    <a href={`/stock/${symbol}`}>
      <div className="book">
        <div className="left-side">
          <p className="category">{companyName}</p>
          <p className="author">{symbol}</p>
        </div>
        <div className="right-side">
          <p className="title">{price}</p>
        </div>
      </div>
    </a>
  );
}

Stock.propTypes = {
  stock: PropTypes.shape({
    price: PropTypes.number.isRequired,
    exchange: PropTypes.string.isRequired,
    companyName: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
  }).isRequired,
};
export default Stock;
