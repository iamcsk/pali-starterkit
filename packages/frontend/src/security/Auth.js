import gql from 'graphql-tag';
import { AppClient, cache} from '../security/AppClient'

const Auth = {
    isAuthenticated: AppClient.readQuery({
        query: gql`
          query data {
            isLoggedIn
          }
        `,
    }).isLoggedIn,
    authenticate(cb) {
      /* Login action need to be moved here */
    },
    signout(cb) {
      this.isAuthenticated = false;
      cache.writeData({
        data: {
          isLoggedIn: !!localStorage.getItem('token'),
        },
      });
      localStorage.removeItem('token')
      setTimeout(cb, 100);
    }
};



export default Auth