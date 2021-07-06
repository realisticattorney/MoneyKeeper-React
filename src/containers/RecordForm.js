/* eslint-disable */
import React from "react";
import { useForm } from "react-hook-form";
import { fetchPostRecord } from "../actions/actionsPostRecord";
import { connect, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";

function Record({ fetchPostRecord }) {
  const { register, handleSubmit } = useForm();
  const auth = useSelector((state) => state);
  console.log("auth.userInfo from record");
  
  const onSubmit = (data) => {
    console.log(data);
    fetchPostRecord(data);
    return <Redirect to="/main" />;
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("flow_direction")}>
          <option value="income">income</option>
          <option value="expenditure">expenditure</option>
        </select>

        <select {...register("frequency")}>
          <option value="once">once</option>
          <option value="regularly">regularly</option>
        </select>

        <select {...register("time_span")}>
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>
          <option value="bi-weekly">bi-weekly</option>
          <option value="monthly">monthly</option>
        </select>

        <input {...register("pending")} value="yes" type="checkbox" />

        <input
          {...register("category", {
            required: true,
            minLength: 6,
            maxLength: 20,
          })}
          placeholder="Name"
        />

        <input
          {...register("description", {
            required: true,
            minLength: 3,
            maxLength: 50,
          })}
          placeholder="Name"
        />

        <input type="submit" />
      </form>
      <Link className="nav-link" to="/main">
        <span className="btn-menu">Back</span>
      </Link>
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostRecord: (data) => dispatch(fetchPostRecord(data)),
});

Record.propTypes = {
  fetchPostRecord: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Record);
