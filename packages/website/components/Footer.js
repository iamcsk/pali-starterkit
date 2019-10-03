import React from 'react'
import { DisplayText } from '@shopify/polaris';

function Footer(props) {
    return (
        <div className="Footer fx actr"> 
                        <div className="Footer-Text">Terms of Use</div>
                        <div className="Footer-Text">Privacy policy</div>
                        <div className="Footer-Text">pali@copyright 2019</div>
         <style jsx>{`
            .Footer{
                position: relative;
                height: 80px;
                padding: 40px;
                padding: 8px 8%;
                display: flex;
                align-items: center;
            }

            .Footer-Text{
                margin-left:10px;
            }

        `}</style>
        </div>
    )
}


export default Footer

