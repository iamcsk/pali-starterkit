import React from 'react'
import { AppProvider, Frame } from '@shopify/polaris';
import AuthHeader from '../components/private/AuthHeader'
import AppNavigations from '../components/AppNavigations'
import theme from '../constants/theme'

import { Component } from 'react'

class AppLayout extends Component {

    state = {
        showMobileNavigation: false
    }

    render() {

        const { RouteComponent } = this.props;

        return (
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
                <Frame 
                    topBar={<AuthHeader></AuthHeader>} 
                    navigation={<AppNavigations></AppNavigations> }
                >
                    <div className="MainPage">
                        {RouteComponent}   
                    </div>
                </Frame>
            </AppProvider>
        )
    }
}

export default AppLayout
