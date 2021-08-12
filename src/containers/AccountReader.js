/* eslint-disable */
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fetchSetGetAccount } from '../actions/actionsAccounts';

function AccountReader({ fetchSetGetAccount }) {
  const auth = useSelector((state) => state);
  useEffect(() => {
    fetchSetGetAccount(auth.userInfo.token);
  }, []);

  return Object.keys(auth.userAccount) === 0 ? (
    <p>Loading...</p>
  ) : (
    <Redirect to="/main" />
  );
}
const mapStateToProps = (state) => ({
  allAccounts: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSetGetAccount: (token) => dispatch(fetchSetGetAccount(token)),
});

AccountReader.propTypes = {
  fetchSetGetAccount: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountReader);
