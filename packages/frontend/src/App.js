import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, {gql} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3333'
})

client.query({
  query: gql`
      {
          rates(currency: "USD") {
              currency
          }
      }
  `
}).then(result => console.log(result))

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
