import React from 'react'
import AppHeader from './../../components/public/AppHeader'
import { Page, Layout, DisplayText } from '@shopify/polaris'

function EmailConfirmationPage() {
    return (
        <Page fullWidth>
            <div className="Pubilc">
                <AppHeader></AppHeader>
            </div>
            <Layout>
                <Layout.Section>
                    <div className="fx col jctr actr">
                        <DisplayText size="large">
                           Confirm your Email
                        </DisplayText>
                        <DisplayText size="small">
                           You account has been sucessfully registered. To complete the process please check your email for a validation request
                        </DisplayText>
                        <img className="BannerImage pt25" src="/svg/inbox-newmail.svg" alt=""></img>
                    </div>
                </Layout.Section>
            </Layout>    
        </Page>
    )
}


export default EmailConfirmationPage

