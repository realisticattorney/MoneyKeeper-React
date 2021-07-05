/* eslint-disable */
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { fetchGetAccount } from "../actions/actionsAccounts";
import { fetchPostAccount } from "../actions/actionsPostAccount";

function AccountCreator({ fetchGetAccount, fetchPostAccount }) {
  const auth = useSelector((state) => state);
  console.log("ACCOUNT CREATOR - auth");
  console.log(auth);
  console.log("ACCOUNT CREATOR - auth");
  console.log("ACCOUNT CREATOR - auth.token");
  const user = jwtDecode(auth.userInfo.token);
  console.log("ACCOUNT CREATOR - auth.token");
  console.log("user_id from jwt decoded");
  console.log(user);
  console.log("user_id from jwt decoded");
  useEffect(() => {
    fetchGetAccount(auth.userInfo.token);
    fetchPostAccount(auth.userInfo.token);
  }, []);

  return Object.keys(auth.userAccount) == 0 ? (
    <p>Loading.2..</p>
  ) : (
    <Redirect to="/main" />
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

export default connect(mapStateToProps, mapDispatchToProps)(AccountCreator);