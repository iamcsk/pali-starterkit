import React, { Component } from 'react'
import { Navigation } from '@shopify/polaris';
import {ArrowLeftMinor, ConversationMinor, HomeMajorMonotone, OrdersMajorTwotone} from '@shopify/polaris-icons';

class AppNavigations extends Component {

    render() {
        return (
            <Navigation location="/">
                <Navigation.Section
                separator
                title=""
                items={[
                    {
                        label: 'Dashboard',
                        icon: HomeMajorMonotone
                    },
                    {
                        label: 'Jaded Pixel Orders',
                        icon: OrdersMajorTwotone
                    },
                ]}
                action={{
                    icon: ConversationMinor,
                    accessibilityLabel: 'Contact support',
                }}
                />
            </Navigation>
        )
    }
}

export default AppNavigations