import React from 'react'
import { AppProvider, Frame } from '@shopify/polaris';
import AuthHeader from '../components/private/AuthHeader'

function AppLayout({ routeComponent: RouteComponent}){

    const theme = {
        colors: {
          topBar: {
            background: '#357997',
          },
        },
        logo: {
          width: 50,
          topBarSource: '/white-logo.png',
          url: '/home',
          accessibilityLabel: 'PALI',
        },
      };
    
    return(
        <AppProvider
            theme={theme}
            i18n={{
            Polaris: {
                Avatar: {
                label: 'Avatar',
                labelWithInitials: 'Avatar with initials {initials}',
                },
                Frame: {skipToContent: 'Skip to content'},
                TopBar: {
                toggleMenuLabel: 'Toggle menu',
                SearchField: {
                    clearButtonLabel: 'Clear',
                    search: 'Search',
                },
                },
            },
            }}
        >
            <Frame topBar={<AuthHeader></AuthHeader>} />
        </AppProvider>
    );
}

export default AppLayout