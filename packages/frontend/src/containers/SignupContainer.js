import React from 'react';
import SignupForm from '../components/public/SignupForm'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import { CREATE_USER } from '../graphql/mutations/auth'
import { Loading, Frame } from '@shopify/polaris'
import Auth from '../security/Auth'

let SignupContainer = () => {

    const client = useApolloClient();
    const [CreateUser, { loading, error } ] = useMutation(CREATE_USER,
            {
              onCompleted({ user })  
              {
                    console.log(' CSK user ', user)
              } 
            }
    )

    if (loading) return  <Frame> <Loading /> </Frame>;
    if (error) return <p>An error occurred</p>;

    return (<div> 
        <SignupForm CreateUser={CreateUser}></SignupForm>    
    </div>);
}

export default SignupContainer;