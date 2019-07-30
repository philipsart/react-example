import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { AppHeader } from '../components';
import ConversationRoute from './conversation';

const MainRoute = () => (
  <React.Fragment>
    <AppHeader />
    <Switch>
      <Route path="/conversation" component={ConversationRoute} />
      <Redirect to="/conversation" />
    </Switch>
  </React.Fragment>
);

export default MainRoute;
