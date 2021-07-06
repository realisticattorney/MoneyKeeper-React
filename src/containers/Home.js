/* eslint-disable */
import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect, Link } from "react-router-dom";

const Home = () => {
const user_signed = useSelector((state) => state.userAccount);

if (user_signed) {
 return <Redirect to="/main" />;
}
  return (
    <div>
      <a href={`/sign_up`}>CREATE ACCOUNT</a>
    </div>
  );
};

export default Home;
