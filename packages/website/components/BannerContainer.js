import React from 'react'
import { TextContainer, Heading, DisplayText, Button } from '@shopify/polaris';

function BannerContainer(props) {
    return (
        <div className="BannerContainer">

            <div className="PrimaryActContainer fx">
                <div className="fx-g2">
                        <TextContainer>
                            <span className="heading">
                                <Heading  element="h1">
                                    <DisplayText size="extraLarge">Sass application for solution</DisplayText>
                                </Heading>
                            </span>
                            <DisplayText size="small"> World class creative services, end-to-end management </DisplayText>
                            <DisplayText size="small"> Billing and reporting in one affordable platform </DisplayText>
                        </TextContainer>
                        <div className="Row">
                            <Button primary> START YOUR FREE TRAIL </Button>
                        </div>
                </div>
                <div className="fx-g2">
                    <img className="BannerImage pt25" src={require('../static/creative_process.png')} alt="Kiwi standing on oval"></img>
                </div>        
                
                
            </div>

        <style jsx>{`

        .BannerContainer{
            height: 500px;
            position: relative;
            top: 0px;
            width: 100%;
            top: 0px;
        }    

        .BannerImage{
            width: 500px;
        }

        .PrimaryActContainer {
            position: relative;
            top: 20%;
            padding: 0% 8%;
        }

        .Row{
            padding: 20px 0px;
            align-items: center;
        }
        

        `}</style>
        </div>
            
    )
}

export default BannerContainer

