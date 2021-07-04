/* eslint-disable */
import React from "react";
import { connect, useSelector } from "react-redux";

const NavBar = () => {
const auth = useSelector((state) => state);
console.log(auth)
  return (
    <div>
      {auth.allStocks.token === undefined || auth.allStocks.token === "undefined" ? (
        <>
          <Link to="/login">SIGN IN</Link>
          <Link className="nav-link" to="/register">
            <span className="btn-menu">SIGN UP</span>
          </Link>
        </>
      ) : (
        <>
          <p>HELLOW SER THIS IS NAVBAR</p>
          {/* <Link to="/cars">
              CARS
            </Link>
            <Link to="/favourites">
              Favourite Cars
            </Link>
            <Link to="/logout">
              LOGOUT {username}
            </Link> */}
        </>
      )}
    </div>
  );
};

export default NavBar;
