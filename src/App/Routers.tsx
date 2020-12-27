import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './browserHistory';
import SamplePage from 'pages/SamplePage';

const { REACT_APP_BASE_PATH } = process.env;

const Routers: React.FC = () => {
  const basePath = REACT_APP_BASE_PATH;

  return (
    <Router history={history}>
      <Switch>
        <Route path={`${basePath}/`} exact component={SamplePage} />
      </Switch>
    </Router>
  )
}

export default Routers;
