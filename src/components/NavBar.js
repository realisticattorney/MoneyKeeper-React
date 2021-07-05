/* eslint-disable */
import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
const userAcc = useSelector((state) => state.userAccount);
console.log(userAcc)
  return (
    <div>
      {Object.keys(userAcc) == 0 ? (
        <>
          <p>Navbar when NOT signed</p>
          <Link to="/sign_in">SIGN IN</Link>
          <Link className="nav-link" to="/sign_up">
            <span className="btn-menu">SIGN UP</span>
          </Link>
        </>
      ) : (
        <>
          <p>Navbar when signed</p>

          <Link to="/logout">LOGOUT</Link>
        </>
      )}
    </div>
  );
};

export default NavBar;
