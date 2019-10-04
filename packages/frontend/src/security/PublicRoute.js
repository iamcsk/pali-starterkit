import React from 'react';
import {  Route, Redirect  } from 'react-router-dom'
import Auth from './Auth';

function PublicRoute({ component: Component, layout: Layout, ...rest}){

    return (<Route 
        {...rest}
        render={props =>
            Auth.isAuthenticated ? (
                <Redirect
                to={{
                  pathname: "/home",
                  state: { from: props.location }
                }}
              />
            ) : (
              <Layout routeComponent={<Component {...props} />}></Layout>
            )
          }
        />

    )
}
export default PublicRoute;