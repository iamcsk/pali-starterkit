import React from 'react'
import { Page } from '@shopify/polaris';

function PageLayout({ routeComponent: RouteComponent}){
    
    return(
        <Page fullWidth>
            {RouteComponent}
        </Page>
    );
}

export default PageLayout