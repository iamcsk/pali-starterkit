import React from 'react';
import './App.css';

import { BrowserRouter as Router  } from 'react-router-dom'

import PrivateRoute from './security/PrivateRoute'
import PublicRoute from './security/PublicRoute';

import PageLayout from './layout/PageLayout';
import AppLayout from './layout/AppLayout'
import EmailConfirmationPage from './pages/public/EmailConfirmationPage'

import LoginPage from './pages/public/LoginPage';
import SignupPage from './pages/public/SignupPage'

import HomePage from './pages/private/HomePage'



function App() {
  return (
    <Router className="main">
      <PublicRoute path="/confirmemail" component={EmailConfirmationPage} layout={PageLayout}/>
      <PublicRoute  path="/login" component={LoginPage} layout={PageLayout}/>
      <PublicRoute path="/signup" component={SignupPage} layout={PageLayout}/>
      <PrivateRoute path="/home" component={HomePage} layout={AppLayout}></PrivateRoute>
    </Router>
  );
}

export default App;
