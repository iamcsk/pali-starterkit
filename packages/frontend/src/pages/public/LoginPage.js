import React from 'react';
import { Page, Layout, DisplayText, Card } from '@shopify/polaris'
import AuthContainer from '../../containers/AuthContainer'

const LoginPage = () => {
    return (
        <Page fullWidth>
            <Layout>

                <Layout.Section>
                    <Card title="" sectioned>
                    <DisplayText size="large">
                        Certified IT Lifecycle management
                    </DisplayText>
                    </Card>
                </Layout.Section>

                <Layout.Section secondary>
                    <Card title="USER LOGIN" sectioned>
                        <AuthContainer></AuthContainer>
                    </Card>
                </Layout.Section>

            </Layout>
        </Page>
    )
}

export default LoginPage