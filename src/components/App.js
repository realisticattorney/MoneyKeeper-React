/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import StocksContainer from '../containers/StocksContainer';
// import StockDetails from '../containers/StockDetails';
import Home from '../containers/Home'
import Sign_up from '../containers/Sign_up'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign_up" component={Sign_up} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
