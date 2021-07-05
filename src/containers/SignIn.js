/* eslint-disable */
import React from "react";
import { useForm } from "react-hook-form";
import { fetchSignIn } from "../actions/actionsSignIn";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

function SignIn({ fetchSignIn }) {
  const { register, handleSubmit } = useForm();
  const auth = useSelector((state) => state);
  console.log("auth.userInfo from signUp");
  console.log(auth.userInfo);
  console.log("auth.userInfo from signUp");
  console.log("auth.userInfo loading value");
  console.log(auth.userInfo.loading);
  console.log("auth.userInfo loading value");
  console.log("auth.userInfo token object keys");
  console.log(auth.userInfo.token);
  console.log("auth.userInfo token object keys");
  const onSubmit = (data) => {
    console.log(data);
    fetchSignUp(data);
  };

  return (auth.userInfo.loading && (auth.userInfo.token == "")) ? (
    <h2 className="text-center pt-5">
      <p>Loading...</p>
    </h2>
  ) : auth.userInfo.token == "undefined" || auth.userInfo.token == undefined ? (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Name"
        />
        <input
          {...register("email", { required: true, pattern: /\S+@\S+\.\S+/ })}
          placeholder="Email"
        />
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Password"
        />
        <input
          {...register("password_confirmation", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Password confirmation"
        />
        <input type="submit" />
      </form>
      <Link className="nav-link" to="/">
        <span className="btn-menu">Back</span>
      </Link>
    </>
  ) : (
        <Redirect to="/main" />
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSignIn: (data) => dispatch(fetchSignIn(data)),
});

SignIn.propTypes = {
  fetchSignIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignIn);
