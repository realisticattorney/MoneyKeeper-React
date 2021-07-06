import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { fetchStocks } from "../actions/actions";
import Stock from "../components/Record";
import CategoryFilter from "../components/CategoryFilter";

const StocksContainer = ({ userInfo, fetchStocks }) => {
  const sector = useSelector((state) => state.userInfo.sectorURL);

  useEffect(() => {
    fetchStocks(sector);
  }, [sector]);

  const renderStocks = () => {
    if (userInfo.loading) {
      return <h1>Loading</h1>;
    }

    return userInfo.stocks.map((stock) => {
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
  userInfo: state.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  fetchStocks: (sector) => dispatch(fetchStocks(sector)),
});

StocksContainer.propTypes = {
  userInfo: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    stocks: PropTypes.instanceOf(Array).isRequired,
    error: PropTypes.string,
  }),
  fetchStocks: PropTypes.func.isRequired,
};

StocksContainer.defaultProps = {
  userInfo: {
    stocks: [],
    loading: false,
  },
};

export default connect(mapStateToProps, mapDispatchToProps)(StocksContainer);
