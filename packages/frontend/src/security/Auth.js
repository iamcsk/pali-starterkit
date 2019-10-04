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
  },
  validateCache(){
    cache.writeData({
      data: {
        isLoggedIn: !!localStorage.getItem('token'),
      },
    });
    window.location.reload()
  },
  signout() {
    localStorage.removeItem("token")
    this.validateCache()
  }
};

export default Auth