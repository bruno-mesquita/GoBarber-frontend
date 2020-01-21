import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignUp from '../Pages/SignUp';
import SignIn from '../Pages/SignIn';

import Dashboard from '../Pages/Dashboard';
import Profile from '../Pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
