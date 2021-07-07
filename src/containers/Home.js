/* eslint-disable */
import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

const Home = () => {
const user_signed = useSelector((state) => state.userAccount.created_by);

if (user_signed != "") {
 return <Redirect to="/main" />;
}
  return (
    <div className="home">
      <h3 className="home-nav">Welcome to</h3>
      <h1 className="home-title">Money Keeper</h1>
      <p className="home-pitch">
        Keeping track <br /> has never been easier
      </p>
      <a className="home-cta-signup" href={`/sign_up`}>
        CREATE ACCOUNT
      </a>
      <p className="home-pitch-two">
        I've already signed in.
        <a className="home-cta-login" href={`/sign_in`}>
          <strong> Login</strong>
        </a>
      </p>
    </div>
  );
};

export default Home;
