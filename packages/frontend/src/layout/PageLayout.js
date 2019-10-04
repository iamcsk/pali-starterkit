import React from 'react'
import { Page } from '@shopify/polaris';

function ApplicationLayout({ routeComponent: RouteComponent}){
    
    return(
        <Page fullWidth>
            {RouteComponent}
        </Page>
    );
}

export default ApplicationLayout