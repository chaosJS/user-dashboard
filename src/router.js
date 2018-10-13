import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';

import Users from "./routes/Users.js";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/products" exact component={Products} />

    </Router>
  );
}

export default RouterConfig;
