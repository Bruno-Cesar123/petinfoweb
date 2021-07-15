import React from 'react';
import { Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import ProfileUser from '../pages/ProfileUser';
import ProfilePet from '../pages/ProfilePet';
import PetInfo from '../pages/PetInfo';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Landing} />
    <Route path="/signin" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile-user" component={ProfileUser} isPrivate />
    <Route path="/profile-pet/:id" component={ProfilePet} isPrivate />
    <Route path="/pet-info/:id" component={PetInfo} isPrivate />
  </Switch>
);

export default Routes;
