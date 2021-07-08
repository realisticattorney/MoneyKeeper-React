/* eslint-disable consistent-return */

import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { fetchGetRecords } from '../actions/actionsRecords';
import Record from '../components/Record';

function Main({ fetchGetRecords }) {
  const auth = useSelector((state) => state);
  const forceUpdate = React.useReducer(() => ({}))[1];
  const { accountId } = auth.userAccount;
  const getRecords = localStorage.getItem('getRecords');
  localStorage.setItem('posted', false);
  useEffect(() => {
    if (auth.userGetRecords.records === undefined || getRecords === 'true') {
      setTimeout(() => {
        forceUpdate();
      }, 100);
      fetchGetRecords(accountId);
      localStorage.setItem('getRecords', false);
    }
  }, []);

  if (
    auth.userAccount.created_by === 'undefined'
    || auth.userAccount.created_by === undefined
  ) {
    return <Redirect to="/" />;
  }

  const renderRecords = () => {
    if (auth.userGetRecords.records) {
      return auth.userGetRecords.records.map((record) => {
        const id = Math.floor(Math.random() * 100000);
        return <Record key={id} record={record} accountId={accountId} />;
      });
    }
  };

  return (
    <>
      <div className="main-grid">
        <Link className="main-post-record" to="/new_form/">
          +
        </Link>
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
