/* eslint-disable */
import React from "react";
// import { fetchSignUp } from "../actions/actionsSignUp";
import { connect, useSelector } from "react-redux";
// import PropTypes from "prop-types";
import jwtDecode from "jwt-decode";
import { Redirect } from "react-router-dom";

export default function Main() {
  const auth = useSelector((state) => state);
  console.log(auth);
  const user = jwtDecode(auth.allStocks.token);
  console.log(user)
  console.log(user)
  console.log(user)
  console.log(user)
  // const onSubmit = (data) => {
  //   console.log(data);
  //   fetchSignUp(data);
  // };

  // if (auth.token) return <Redirect to="/" />;

  return (
    <div>
      <h1>welcome ser!</h1>
      <p>{auth.allStocks.token}</p>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchSignUp: (data) => dispatch(fetchSignUp(data)),
// });

// Sign_Up.propTypes = {
//   fetchSignUp: PropTypes.func.isRequired,
// };

// export default connect(null, mapDispatchToProps)(Sign_Up);
