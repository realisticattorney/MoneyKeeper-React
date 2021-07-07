/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { fetchSignUp } from "../actions/actionsSignUp";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { Redirect, Link } from "react-router-dom";
import { fetchGetRecords } from "../actions/actionsRecords";
import Record from '../components/Record'

function Main({ fetchGetRecords}) {
  const auth = useSelector((state) => state);
  console.log(auth);
  const user = jwtDecode(auth.userInfo.token);
  console.log("user_id from jwt decoded");
  console.log(user);
  console.log("user_id from jwt decoded");
  const account_id = auth.userAccount.account_id;
  console.log(account_id);

  useEffect(() => {
    fetchGetRecords(account_id);
  }, []);

  console.log("userGetRecords (main)");
  console.log(auth.userGetRecords);
  console.log("userGetRecords (main)");

  if(auth.userAccount.created_by == "undefined" || auth.userAccount.created_by == undefined) {
   return <Redirect to="/" />;
  }


    const renderRecords = () => {
      if (auth.userGetRecords.records ) {
        return auth.userGetRecords.records.map((record) => {
          const id = Math.floor(Math.random() * 100000);
          return <Record key={id} record={record} account_id={account_id} />;
        });
      }
    };

return (
  <>
  <div className="main-grid">
    <a className="main-post-record" href={`/new_form/`}>
      +
    </a>
  </div>
    <div className="main-records">{renderRecords()}</div>
  </>
);
}

const mapStateToProps = (state) => ({
  userGetRecords: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetRecords: (token) => dispatch(fetchGetRecords(token)),
});

Main.propTypes = {
  fetchGetRecords: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
