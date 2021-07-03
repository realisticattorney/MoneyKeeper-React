import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchStocks } from "../actions/actions";
import Stock from "../components/Stock";
import CategoryFilter from "../components/CategoryFilter";

const StocksContainer = ({ allStocks, fetchStocks }) => {
  const sector = useSelector((state) => state.allStocks.sectorURL);

  useEffect(() => {
    fetchStocks(sector);
  }, [sector]);

  const renderStocks = () => {
    if (allStocks.loading) {
      return <h1>Loading</h1>;
    }

    return allStocks.stocks.map((stock) => {
      const id = Math.floor(Math.random() * 100000);
      return <Stock key={id} stock={stock} lol={id} />;
    });
  };

  const changeFilter = (e) => {
    fetchStocks(e.target.value);
  };

  return (
    <>
      <nav className="header">
        <h1 className="book-app">XYZ Finance</h1>
        <CategoryFilter handleFilterChange={changeFilter} />
      </nav>
      <div>
        <div className="books-cms">{renderStocks()}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  allStocks: state.allStocks,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStocks: (sector) => dispatch(fetchStocks(sector)),
});

StocksContainer.propTypes = {
  allStocks: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stocks: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
  }),
  fetchStocks: PropTypes.func.isRequired,
};

StocksContainer.defaultProps = {
  allStocks: {
    stocks: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer);
