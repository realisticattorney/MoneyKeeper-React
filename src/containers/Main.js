/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { fetchSignUp } from "../actions/actionsSignUp";
import { connect, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";
import { fetchGetAccount } from "../actions/actionsAccounts";
import { fetchPostAccount } from "../actions/actionsPostAccount";

export default function Main() {
  const auth = useSelector((state) => state);
  console.log(auth);
  const user = jwtDecode(auth.userInfo.token);
  console.log("user_id from jwt decoded");
  console.log(user);
  console.log("user_id from jwt decoded");

  useEffect(() => {
    fetchGetAccount(auth.userInfo.token);
  }, []);

  // useEffect(() => {
  //   fetchGetAccount(auth.userInfo.user.token);
  // const userAcc = auth.allAccounts.filter(acc => acc.data.id == user.user_id)
  // console.log("userAccc")
  // console.log(userAcc)
  // console.log("userAccc")
  //   if (Object.keys(userAcc).length == 0) {
  //     fetchPostAccount(auth.userInfo.user.token);
  //   }
  // }, []);

  console.log("all accounts (redux)");
  console.log(auth.allAccounts);
  console.log("all accounts (redux)");

  return (
    <div>
      <h1>welcome to MAIN ser!</h1>
      <p>{auth.userInfo.token}</p>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   allAccounts: state,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchGetAccount: (token) => dispatch(fetchGetAccount(token)),
//   fetchPostAccount: (token) => dispatch(fetchPostAccount(token)),
// });

// Sign_Up.propTypes = {
//   fetchSignUp: PropTypes.func.isRequired,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Main);
