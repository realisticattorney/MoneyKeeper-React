/* eslint-disable */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-nested-ternary */

import React from 'react';
import { useForm } from 'react-hook-form';
import { connect, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Link } from 'react-router-dom';
import { fetchSignUp } from '../actions/actionsSignUp';

function SignUp({ fetchSignUp }) {
  const { register, handleSubmit } = useForm();
  const auth = useSelector((state) => state.userInfo);
  const onSubmit = (data) => {
    fetchSignUp(data);
  };

  return auth.loading === true && auth.token === 'undefined' ? (
    <div className="loading">Loading&#8230;</div>
  ) : auth.token === 'undefined' ? (
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
            placeholder="Password"
            type="password"
          />
          <input
            {...register('password_confirmation', {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            placeholder="Password confirmation"
            type="password"
          />
          <button className="form-button" type="submit">
            Register
          </button>
        </form>
        <Link className="nav-link" to="/">
          <span className="btn-menu">Back</span>
        </Link>
      </div>
    ) : (
      <Redirect to="/accountCreator" />
    );
}

const mapDispatchToProps = (dispatch) => ({
  fetchSignUp: (data) => dispatch(fetchSignUp(data)),
});

SignUp.propTypes = {
  fetchSignUp: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
