import React from 'react';
import { Switch } from 'react-router-dom';

import Landing from '../pages/Landing';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
  </Switch>
);

export default Routes;
