/* eslint-disable */
import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { fetchGetAccount } from '../actions/actionsAccounts';
import { fetchPostAccount } from '../actions/actionsPostAccount';

function AccountCreator({ fetchPostAccount }) {
  const auth = useSelector((state) => state);
  useEffect(() => {
    fetchPostAccount(auth.userInfo.token);
  }, []);

  return Object.keys(auth.userAccount) === 0 ? (
    <p>Loading...</p>
  ) : (
    <Redirect to="/main" />
  );
}
// const mapStateToProps = (state) => ({
//   allAccounts: state,
// });

const mapDispatchToProps = (dispatch) => ({
  // fetchGetAccount: (token) => dispatch(fetchGetAccount(token)),
  fetchPostAccount: (token) => dispatch(fetchPostAccount(token))
});

AccountCreator.propTypes = {
  // fetchGetAccount: PropTypes.func.isRequired,
  fetchPostAccount: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(AccountCreator);
