import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.min.css';

import { AuthProvider } from './hooks/AuthContext';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>

      <ToastContainer autoClose={3000} className="toast-container" />
    </BrowserRouter>
  );
};

export default App;
