/* eslint-disable */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import StocksContainer from '../containers/StocksContainer';
// import StockDetails from '../containers/StockDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/" exact component={StocksContainer} /> */}
          {/* <Route path="/stock/:symbol" component={StockDetails} /> */}
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
