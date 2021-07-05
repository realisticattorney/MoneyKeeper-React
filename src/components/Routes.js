/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import StocksContainer from '../containers/StocksContainer';
// import StockDetails from '../containers/StockDetails';
import App from '../pages/App'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import AccountCreator from "../pages/AccountCreator";

function Routes() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={Login} />
          <Route path="/main" component={Dashboard} />
          <Route path="/accountCreator" component={AccountCreator} />
          <Route
            exact
            path="/logout"
            render={() => {
              localStorage.setItem("token", undefined);
              localStorage.setItem("name", "");
              localStorage.setItem("email", "");
              window.location.href = "/";
            }}
          />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Routes;
