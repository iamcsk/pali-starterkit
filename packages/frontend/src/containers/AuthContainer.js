import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import { useMutation } from '@apollo/react-hooks'
import { LOGIN_USER } from '../transport/mutations/auth'

let AuthContainer = () => {

    const [LoginUser, { data } ] = useMutation(LOGIN_USER)

    return (<div> 
        <LoginForm LoginUser={LoginUser}></LoginForm>
    </div>);
}

export default AuthContainer;