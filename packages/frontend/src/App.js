import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route  } from 'react-router-dom'

import PrivateRoute from './security/PrivateRoute'

import AppLayout from './layout/AppLayout'

import LoginPage from './pages/public/LoginPage';
import SignupPage from './pages/public/SignupPage'

import HomePage from './pages/private/HomePage'


function App() {
  return (
    <Router className="main">
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <PrivateRoute path="/home" component={HomePage} layout={AppLayout}></PrivateRoute>
    </Router>
  );
}

export default App;
