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
import AccountReader from "../pages/AccountReader";
import RecordForm from "../containers/RecordForm";
import RecordDetails from "../containers/RecordDetails";

function Routes() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/sign_up" component={SignUp} />
          <Route path="/sign_in" component={Login} />
          <Route path="/main" component={Dashboard} 
          render={() => {
              localStorage.setItem("posted", false);
          }}
          />
          <Route path="/accountCreator" component={AccountCreator} />
          <Route path="/accountReader" component={AccountReader} />
          <Route path="/new_form" component={RecordForm} />
          <Route path="/accounts/:account_id/records/:id" component={RecordDetails} />
          <Route
            exact
            path="/logout"
            render={() => {
              localStorage.setItem("token", undefined);
              localStorage.setItem("name", "");
              localStorage.setItem("email", "");
              localStorage.setItem("account_id", "");
              localStorage.setItem("created_by", "");
              localStorage.setItem("created_at", "");
              localStorage.setItem("user_records", []);
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
