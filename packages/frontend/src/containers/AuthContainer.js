import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { LOGIN_USER } from '../transport/mutations/auth'
import { Loading, Frame } from '@shopify/polaris'

let AuthContainer = () => {

    const client = useApolloClient();
    const [LoginUser, { loading, error } ] = useMutation(LOGIN_USER,
            {
              onCompleted({ login })  
              {
                localStorage.setItem('token', login);
                client.writeData({ data: { isLoggedIn: true } });
                console.log(' CSK user logged in ', login);
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