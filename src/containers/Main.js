/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { fetchSignUp } from "../actions/actionsSignUp";
import { connect, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { fetchGetAccount } from "../actions/actionsAccounts";
import { fetchPostAccount } from "../actions/actionsPostAccount";

function Main({ fetchGetAccount, fetchPostAccount }) {
  const auth = useSelector((state) => state);
  console.log(auth);
  const user = jwtDecode(auth.allStocks.token);
  useEffect(() => {
    fetchGetAccount(auth.allStocks.token);
    fetchPostAccount(auth.allStocks.token);
  }, []);

  // const already_has_account = auth.allAccounts.filter(
  //   (account) => account.created_by === user.user_id
  // );
  console.log('lel')
  console.log(auth.allAccounts);
  console.log('lel')
  // console.log(already_has_account);
  // if (already_has_account == []) {
  //   fetchPostAccount(auth.allStocks.token);
  // }

  return (
    <div>
      <h1>welcome ser!</h1>
      <p>{auth.allStocks.token}</p>
    </div>
  );
}


const mapStateToProps = (state) => ({
  allAccounts: state,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetAccount: (token) => dispatch(fetchGetAccount(token)),
  fetchPostAccount: (token) => dispatch(fetchPostAccount(token)),
});

// Sign_Up.propTypes = {
//   fetchSignUp: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(Main);