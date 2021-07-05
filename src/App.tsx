import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './styles/global';

import 'react-toastify/dist/ReactToastify.min.css';

import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <ToastContainer autoClose={3000} className="toast-container" />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
