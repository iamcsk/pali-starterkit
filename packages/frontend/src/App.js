import React from 'react';
import logo from './logo.svg';
import './App.css';


import { BrowserRouter as Router, Route  } from 'react-router-dom'


import LoginPage from './pages/public/LoginPage';
import SignupPage from './pages/public/SignupPage'

// client.query({
//   query: gql`
//       {
//           rates(currency: "USD") {
//               currency
//           }
//       }
//   `
// }).then(result => console.log(result))

function App() {
  return (
    <Router className="main">
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
    </Router>
  );
}

export default App;
