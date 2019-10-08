import React from 'react';
import SignupForm from '../components/forms/SignupForm'
import { useMutation } from '@apollo/react-hooks'
import { CREATE_USER } from '../transport/mutations/auth'
import { Loading, Frame } from '@shopify/polaris'
import { withRouter } from 'react-router-dom'

let SignupContainer = (props) => {

    const [CreateUser, { loading, error } ] = useMutation(CREATE_USER,
            {
              onCompleted({ createUser })  
              {
                    if(createUser){
                      props.history.push('confirmemail')
                    }
              } 
            }
    )

    if (loading) return  <Frame> <Loading /> </Frame>;
    if (error) return <p>An error occurred</p>;

    return (<div> 
        <SignupForm CreateUser={CreateUser}></SignupForm>    
    </div>);
}

export default withRouter(SignupContainer);