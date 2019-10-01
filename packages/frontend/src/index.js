import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "@shopify/polaris/styles.css";
import App from './App';
import * as serviceWorker from './serviceWorker';
import { AppProvider } from '@shopify/polaris'
import { ApolloProvider } from '@apollo/react-hooks'
import ApolloClient, {gql} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql'
})

ReactDOM.render(
    <AppProvider>
        <ApolloProvider client={client}>
            <App />        
        </ApolloProvider>
    </AppProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
