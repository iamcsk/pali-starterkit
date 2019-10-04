import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { LOGIN_USER } from '../transport/mutations/auth'
import { Loading, Frame } from '@shopify/polaris'
import Auth from '../security/Auth'

let AuthContainer = () => {

    const client = useApolloClient();
    const [LoginUser, { loading, error } ] = useMutation(LOGIN_USER,
            {
              onCompleted({ login })  
              {
                localStorage.setItem('token', login);
                client.writeData({ data: { isLoggedIn: true } });
                Auth.validateCache()
              } 
            }
    )

    if (loading) return  <Frame> <Loading /> </Frame>;
    if (error) return <p>An error occurred</p>;

    return (<div> 
        <LoginForm LoginUser={LoginUser}></LoginForm>
    </div>);
}

export default AuthContainer;