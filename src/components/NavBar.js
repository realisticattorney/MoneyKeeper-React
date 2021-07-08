/* eslint-disable */
import React from "react";
import { useSelector } from "react-redux";

const NavBar = () => {
  const userAcc = useSelector((state) => state);
  return userAcc.userAccount.created_by !== "" ? (
    <div className="navbar-cta-logout">
      <h4 className="main-username">
        Hi,
        {userAcc.userInfo.name}!
      </h4>
      <a className="logout" href="/logout">
        LOG OUT
      </a>
    </div>
  ) : (
    <></>
  );
};

export default NavBar;
