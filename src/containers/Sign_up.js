/* eslint-disable */
import React from "react";
import { useForm } from "react-hook-form";
import { fetchSignUp } from "../actions/actionsSignUp";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";

function Sign_Up({ fetchSignUp }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetchSignUp(data);
  };
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
  fetchSignUp: (data) => dispatch(fetchSignUp(data)),
});

Sign_Up.propTypes = {
  fetchSignUp: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Sign_Up);
