/* eslint-disable */
import React from "react";
import { useForm } from "react-hook-form";
import { fetchSignIn } from "../actions/actionsSignIn";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

function SignIn({ fetchSignIn }) {
  const { register, handleSubmit } = useForm();
  const auth = useSelector((state) => state.allStocks);
  console.log(auth);
  console.log(auth);
  console.log(auth);
  const onSubmit = (data) => {
    console.log(data);
    fetchSignIn(data);
  };

  if (auth.token) return <Redirect to="/main" />;

  return (
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
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSignIn: (data) => dispatch(fetchSignIn(data)),
});

SignIn.propTypes = {
  fetchSignIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignIn);
