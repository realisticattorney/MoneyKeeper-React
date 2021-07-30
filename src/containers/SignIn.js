/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { fetchSignIn } from '../actions/actionsSignIn';

function SignIn({ fetchSignIn }) {
  const { register, handleSubmit } = useForm();
  const auth = useSelector((state) => state.userInfo);
  const onSubmit = (data) => {
    data.password_confirmation = data.password;
    fetchSignIn(data);
  };

  return auth.token === 'undefined' ? (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Name"
        />
        <input
          {...register('email', { required: true, pattern: /\S+@\S+\.\S+/ })}
          placeholder="Email"
        />
        <input
          {...register('password', {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          type="password"
          placeholder="Password"
        />
        <button className="form-button" type="submit">
          Login
        </button>
      </form>
      <Link className="nav-link" to="/">
        <span className="btn-menu">Back</span>
      </Link>
    </div>
  ) : (
    <Redirect to="/accountReader" />
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSignIn: (data) => dispatch(fetchSignIn(data)),
});

SignIn.propTypes = {
  fetchSignIn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignIn);
