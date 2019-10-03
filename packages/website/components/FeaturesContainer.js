import React from 'react'
import { Heading, DisplayText, TextContainer } from '@shopify/polaris';

function FeaturesContainer() {
    return(
        <div className="PageContainer fx cl">
            <div className="PageRow mb60">
                    <TextContainer>
                        <DisplayText size="medium">Simple Plans for Everyone!</DisplayText>
                        <DisplayText size="small">Try this app With A 14-Day Free Trial</DisplayText>
                        
                    </TextContainer>
            </div>

            <div className="PageRow fx">
                <div className="Feature-Card">
                    <Heading>Analytics</Heading>
                    <DisplayText size="small">
                        Analytics that are a perfect fit for the software as a service industry.
                    </DisplayText>
                </div>

                <div className="Feature-Card">
                    <Heading>Billing and Payment</Heading>
                    <DisplayText size="small">
                        subscription management system which can help you handle all the aspects of the subscription life cycle including recurring billing, invoicing and trial management for your customers
                    </DisplayText>
                </div>

                <div className="Feature-Card">
                    <Heading>24/7 Customer support</Heading>
                    <DisplayText size="small">
                        subscription management system which can help you handle all the aspects of the subscription life cycle including recurring billing, invoicing and trial management for your customers
                    </DisplayText>
                </div>
            </div>

            
        </div>
    )
}

export default FeaturesContainer;