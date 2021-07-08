/* eslint-disable */
import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { fetchSetGetAccount } from "../actions/actionsAccounts";

function AccountReader({ fetchSetGetAccount }) {
  const auth = useSelector((state) => state);
  console.log("ACCOUNT reader - auth");
  console.log(auth);
  console.log("ACCOUNT reader - auth");
  console.log("ACCOUNT reader - auth.token");
  const user = jwtDecode(auth.userInfo.token);
  console.log("ACCOUNT reader - auth.token");
  console.log("user_id from jwt decoded");
  console.log(user);
  console.log("user_id from jwt decoded");
  useEffect(() => {
    fetchSetGetAccount(auth.userInfo.token);
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
  fetchSetGetAccount: (token) => dispatch(fetchSetGetAccount(token)),
});

// Sign_Up.propTypes = {
//   fetchSignUp: PropTypes.func.isRequired,
// };

export default connect(mapStateToProps, mapDispatchToProps)(AccountReader);
