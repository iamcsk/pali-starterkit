import React from 'react';
import { Page, Layout, DisplayText, Card } from '@shopify/polaris'
import AuthContainer from '../../containers/AuthContainer'
import AppHeader from '../../components/public/AppHeader'

const LoginPage = () => {
    return (
        <Page fullWidth>
            <AppHeader></AppHeader>
            <Layout>
                <Layout.Section>
                    <div className="fx col jctr actr">
                        <DisplayText size="large">
                           Welcome back :-)
                        </DisplayText>
                        <DisplayText size="small">
                           To keep connected with us please login with email address and password
                        </DisplayText>
                        <img className="pt25" src="/svg/login.svg" alt="Kiwi standing on oval" width="500" height="500"></img>
                    </div>
                </Layout.Section>

                <Layout.Section secondary>
                    <div>
                        <AuthContainer></AuthContainer>
                    </div>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default LoginPage