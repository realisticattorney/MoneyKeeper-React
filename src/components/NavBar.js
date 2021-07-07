/* eslint-disable */
import React from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const NavBar = () => {
const userAcc = useSelector((state) => state);
console.log(userAcc)
  return (
    <div>
      {userAcc.userAccount.created_by == "" ? (
        <>
          {/* <p>Navbar when NOT signed</p>
          <Link to="/sign_in">SIGN IN</Link>
          <Link className="nav-link" to="/sign_up">
            <span className="btn-menu">SIGN UP</span>
          </Link> */}
        </>
      ) : (
        <div className="navbar-cta-logout">
          <h4 className="main-username">Hi, {userAcc.userInfo.name}!</h4>
          <a className="logout" href={`/logout`}>
            LOG OUT
          </a>
        </div>
      )}
    </div>
  );
};

export default NavBar;
