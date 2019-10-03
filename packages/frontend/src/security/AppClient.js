import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

const AppClient = new ApolloClient({
    cache,
    uri: 'http://localhost:3333/graphql',
    link: new HttpLink({
      uri: 'http://localhost:3333/graphql',
      headers: {
        authorization: localStorage.getItem('token'),
      },
    }),
});

cache.writeData({
    data: {
      isLoggedIn: !!localStorage.getItem('token'),
    },
});

// let token = AppClient.readQuery({
//     query: gql`
//       query data {
//         isLoggedIn
//       }
//     `,
// }).isLoggedIn;


export { AppClient, cache } ;