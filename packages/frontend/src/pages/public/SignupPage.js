import React from 'react';
import SignupForm from '../../components/forms/SignupForm'
import { Page, Layout, DisplayText, Thumbnail } from '@shopify/polaris'
import AppHeader from '../../components/public/AppHeader'

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
                        <SignupForm></SignupForm>    
                    </div>
                </Layout.Section>
            </Layout>
        </Page>
    )
}

export default SignupPage