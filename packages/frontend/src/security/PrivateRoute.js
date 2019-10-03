import React from 'react';
import {  Route, Redirect  } from 'react-router-dom'
import Auth from './Auth';

function PrivateRoute({ component: Component, layout: Layout, ...rest}){
    return (<Route 
        {...rest}
        render={props =>
            Auth.isAuthenticated ? (
              <Layout routeComponent={<Component {...props} />}></Layout>
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: props.location }
                }}
              />
            )
          }
        />

    )
}
export default PrivateRoute;