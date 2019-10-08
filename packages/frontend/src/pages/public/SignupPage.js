import React from 'react';
import { Page, Layout, DisplayText } from '@shopify/polaris'
import AppHeader from '../../components/public/AppHeader'
import SignupContainer from '../../containers/SignupContainer';

const SignupPage = () => {
    return (
        <Page fullWidth>
            <AppHeader></AppHeader>
            <Layout>
                <Layout.Section>
                    <div className="fx col jctr actr">
                        <DisplayText size="large">
                           Sass Application
                        </DisplayText>    
                        <DisplayText size="small">
                           An application helps you to improve your productvity.
                        </DisplayText>
                        <img className="BannerImage pt25" src="/svg/click_here.svg" alt="Kiwi standing on oval"></img>
                    </div>
                </Layout.Section>

                <Layout.Section secondary>
                    <div>
                        <SignupContainer></SignupContainer>
                    </div>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default SignupPage