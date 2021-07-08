/* eslint-diable */
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
  const auth = useSelector((state) => state);
  const onSubmit = (data) => {
    fetchSignUp(data);
  };

  return auth.userInfo.loading && auth.userInfo.token === 'undefined' ? (
    <div className="loading">Loading&#8230;</div>
  ) : auth.userInfo.token === 'undefined'
    || auth.userInfo.token === undefined ? (
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
          />
          <input
            {...register('password_confirmation', {
              required: true,
              minLength: 6,
              maxLength: 20,
            })}
            placeholder="Password confirmation"
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