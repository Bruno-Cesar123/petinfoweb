import React from 'react';
import { Switch } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import ProfileUser from '../pages/ProfileUser';
import PetInfo from '../pages/PetInfo';

import Route from './Route';
import { dark } from '../styles/themes/dark';
import { light } from '../styles/themes/light';
import usePersistedTheme from '../hooks/usePersistedTheme';

import GlobalStyle from '../styles/global';

const Routes: React.FC = () => {
  const [theme, setTheme] = usePersistedTheme<DefaultTheme>('theme', light);

  const toggleTheme = (): void => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />

        <Route
          path="/dashboard"
          isPrivate
          component={() => <Dashboard toggleTheme={toggleTheme} />}
        />

        <Route path="/profile-user" component={ProfileUser} isPrivate />
        <Route path="/pet-info/:id" component={PetInfo} isPrivate />
      </Switch>
    </ThemeProvider>
  );
};

export default Routes;
