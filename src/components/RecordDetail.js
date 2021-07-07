/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { deleteRecord } from "../actions/actionsPostRecord";
const RecordDetail = ({ selectedRecord, deleteRecord }) => {
  const auth = useSelector((state) => state);
  console.log(selectedRecord);

  const handleClick = () => {
    deleteRecord(selectedRecord);
    localStorage.setItem("getRecords", "true");
    localStorage.setItem("posted", "true");
  };

  return localStorage.getItem("posted") == "true" ? (
    <Redirect to="/main" />
  ) : (
    <div className="det">
      <div className="det-middle">
        <div className="det-left-side">
          <p className="det-price"> ${selectedRecord.amount}</p>
        </div>
        <div className="det-right-side">
          <Link className="nav-link" to="/main">
            <span className="btn-menu-modular">X</span>
          </Link>
          <p>
            {" "}
            Pending:
            {selectedRecord.pending}
          </p>
          <p>
            {" "}
            Frequency:
            {selectedRecord.frequency}
          </p>
          <button onClick={(e) => handleClick()}>DELETE</button>
        </div>
      </div>
      <div className="det-top">
        <p className="det-top-subtitle">
          Category: <br />
          {selectedRecord.category}
        </p>
        <p className="det-top-subtitle">
          Description: <br />
          {selectedRecord.description}
        </p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteRecord: (data) => dispatch(deleteRecord(data)),
});


RecordDetail.propTypes = {
  deleteRecord: PropTypes.func.isRequired,
  selectedRecord: PropTypes.shape({
    category: PropTypes.string,
    amount: PropTypes.number,
    frequency: PropTypes.string,
    description: PropTypes.string,
    pending: PropTypes.string,
    // created_at: PropTypes.string,
  }),
};

RecordDetail.defaultProps = {
  selectedRecord: {},
};


export default connect(null, mapDispatchToProps)(RecordDetail);
