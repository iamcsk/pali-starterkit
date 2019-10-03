import React, { Component } from 'react';
import { Layout, Card, ResourceList, Thumbnail, TextStyle, DisplayText, TextContainer, Button } from '@shopify/polaris';


class PircingContainer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             pricing: [
                 {
                     title: 'Free',
                     description:'Startup',
                     items: [
                        {
                        id: 9941,
                        url: 'produdcts/343',
                        name: '1-10 Devices',
                        media: (
                            <Thumbnail
                            source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                            alt="Black orange scarf"
                            />
                        ),
                        },
                        {
                        id: 9942,
                        url: 'produdcts/258',
                        name: '1-11 Employees',
                        media: (
                            <Thumbnail
                            source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                            alt="Tucan scarf"
                            />
                        ),
                        },
                        {
                            id: 9943,
                            url: 'produdcts/258',
                            name: 'Analytics',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                alt="Tucan scarf"
                                />
                            ),
                        }
                    ]
                 },
                 {
                    title: 'Basic',
                    description:'455 units available',
                    items: [
                       {
                       id: 9944,
                       url: 'produdcts/343',
                       name: '1-100 devices',
                       media: (
                           <Thumbnail
                           source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                           alt="Black orange scarf"
                           />
                       ),
                       },
                       {
                       id: 9945,
                       url: 'produdcts/258',
                       name: '1-100 Employees',
                       media: (
                           <Thumbnail
                           source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                           alt="Tucan scarf"
                           />
                       ),
                       },
                       {
                        id: 99451,
                        url: 'produdcts/258',
                        name: 'Professional Support',
                        media: (
                            <Thumbnail
                            source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                            alt="Tucan scarf"
                            />
                        ),
                        },
                        {
                            id: 99452,
                            url: 'produdcts/258',
                            name: 'Professional Support',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                alt="Tucan scarf"
                                />
                            ),
                        },
                   ]
                },
                {
                    title: 'Pro',
                    description:'455 units available',
                    items: [
                        {
                            id: 99453,
                            url: 'produdcts/343',
                            name: '101-250 devices',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                                alt="Black orange scarf"
                                />
                            ),
                            },
                            {
                            id: 99454,
                            url: 'produdcts/258',
                            name: '101-250 Employees',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                alt="Tucan scarf"
                                />
                            ),
                            },
                            {
                             id: 99455,
                             url: 'produdcts/258',
                             name: 'Professional Support',
                             media: (
                                 <Thumbnail
                                 source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                 alt="Tucan scarf"
                                 />
                             ),
                             },
                             {
                                 id: 99456,
                                 url: 'produdcts/258',
                                 name: 'Professional Support',
                                 media: (
                                     <Thumbnail
                                     source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                     alt="Tucan scarf"
                                     />
                                 ),
                            },
                            {
                                id: 99457,
                                url: 'produdcts/258',
                                name: 'Plugins',
                                media: (
                                    <Thumbnail
                                    source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                    alt="Tucan scarf"
                                    />
                                ),
                           },
                   ]
                },
                {
                    title: 'Earth',
                    description:'455 units available',
                    items: [
                        {
                            id: 99453,
                            url: 'produdcts/343',
                            name: '101-250 devices',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                                alt="Black orange scarf"
                                />
                            ),
                            },
                            {
                            id: 99454,
                            url: 'produdcts/258',
                            name: '101-250 Employees',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                alt="Tucan scarf"
                                />
                            ),
                            },
                            {
                             id: 99455,
                             url: 'produdcts/258',
                             name: 'Professional Support',
                             media: (
                                 <Thumbnail
                                 source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                 alt="Tucan scarf"
                                 />
                             ),
                             },
                             {
                                 id: 99456,
                                 url: 'produdcts/258',
                                 name: 'Professional Support',
                                 media: (
                                     <Thumbnail
                                     source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                     alt="Tucan scarf"
                                     />
                                 ),
                            },
                            {
                                id: 99457,
                                url: 'produdcts/258',
                                name: 'Plugins',
                                media: (
                                    <Thumbnail
                                    source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                    alt="Tucan scarf"
                                    />
                                ),
                           },
                   ]
                },
                {
                    title: 'Galaxy',
                    description:'455 units available',
                    items: [
                        {
                            id: 99453,
                            url: 'produdcts/343',
                            name: '101-250 devices',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/black-orange-stripes_373x@2x.jpg"
                                alt="Black orange scarf"
                                />
                            ),
                            },
                            {
                            id: 99454,
                            url: 'produdcts/258',
                            name: '101-250 Employees',
                            media: (
                                <Thumbnail
                                source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                alt="Tucan scarf"
                                />
                            ),
                            },
                            {
                             id: 99455,
                             url: 'produdcts/258',
                             name: 'Professional Support',
                             media: (
                                 <Thumbnail
                                 source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                 alt="Tucan scarf"
                                 />
                             ),
                             },
                             {
                                 id: 99456,
                                 url: 'produdcts/258',
                                 name: 'Professional Support',
                                 media: (
                                     <Thumbnail
                                     source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                     alt="Tucan scarf"
                                     />
                                 ),
                            },
                            {
                                id: 99457,
                                url: 'produdcts/258',
                                name: 'Plugins',
                                media: (
                                    <Thumbnail
                                    source="https://burst.shopifycdn.com/photos/tucan-scarf_373x@2x.jpg"
                                    alt="Tucan scarf"
                                    />
                                ),
                           },
                   ]
                }

             ]
        }
    }

    

    render() {

        const { pricing } = this.state

        const PricingCards = (
            <Layout>
                {pricing.map((card) =>
                    <div className="CardContainer" key={card.title.toString()}>
                        <Card title={card.title}>
                            <Card.Section>
                                <TextStyle variation="subdued">455 units available</TextStyle>
                            </Card.Section>
                            <Card.Section title="">
                                <ResourceList
                                resourceName={{singular: 'product', plural: 'products'}}
                                items={card.items}
                                renderItem={(item) => {

                                    const {id, url, name, sku, media, quantity} = item;
        
                                    return (
                                    <ResourceList.Item
                                        id={id}
                                        accessibilityLabel={`View details for ${name}`}
                                    >
                                        <h3>
                                        <TextStyle variation="strong">{name}</TextStyle>
                                        </h3>
                                        
                                    </ResourceList.Item>
                                    );

                                }}
                                />
                                <div className="Bottom mb20 l30">
                                    <Button primary>Sign Up</Button>
                                </div>
                                
                            </Card.Section>
                        </Card>
                        <style jsx>{`

                        .CardContainer {
                            margin: 0px 8px;
                        }

                        .CardContainer .Polaris-Card {
                            height: 400px;
                            width: 250px;
                        }

                        .Bottom {
                            bottom: 6px;
                        }

                        `}</style>
                    </div>
                    )
                }
            </Layout>
        );

        return (
            <div className="PageContainer"> 
            
                <div className="PageRow mb60">
                    <TextContainer>
                        <DisplayText size="medium">Simple Plans for Everyone!</DisplayText>
                        <DisplayText size="small">Try this app With A 14-Day Free Trial</DisplayText>
                        
                    </TextContainer>
                </div>

                <div className="PageRow mb60">
                    {PricingCards} 
                </div>                
                
            </div>
        );
    }
}

export default PircingContainer;