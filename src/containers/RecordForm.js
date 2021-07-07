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
    console.log(data);
    console.log(data);
    console.log(data);
    if (data.pending == false) {
      data.pending = "yes"
    }
    fetchPostRecord(data);
    localStorage.setItem("getRecords", true);
    localStorage.setItem("posted", "true");
    return <Redirect to="/main" />;
  };

  return localStorage.getItem("posted") == "true" ? (
    <Redirect to="/main" />
  ) : (
    <div className="signup">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("pending")}
          id="record-checkbox"
          value="no"
          type="checkbox"
          name="pending"
        />
        <input
          type="number"
          {...register("amount", {
            required: true,
          })}
          placeholder="Quantity ($)"
        />

        <select {...register("flow_direction")}>
          <option value="income">Income (+)</option>
          <option value="expenditure">Expenditure (-)</option>
        </select>

        <select {...register("frequency")}>
          <option value="once">Once</option>
          <option value="regularly">Regularly</option>
        </select>

        <select {...register("time_span")}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="bi-weekly">Bi-Weekly</option>
          <option value="monthly">Monthly</option>
        </select>

        <input
          {...register("category", {
            required: true,
            minLength: 0,
            maxLength: 20,
          })}
          placeholder="Category"
        />

        <input
          {...register("description", {
            required: true,
            minLength: 0,
            maxLength: 50,
          })}
          placeholder="Description"
        />

        <button className="form-button" type="submit">
          ADD ITEM
        </button>
      </form>
      <Link className="nav-link" to="/main">
        <span className="btn-menu">Back</span>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchPostRecord: (data) => dispatch(fetchPostRecord(data)),
});

Record.propTypes = {
  fetchPostRecord: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Record);
