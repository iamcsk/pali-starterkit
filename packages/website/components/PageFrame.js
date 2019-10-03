import React from 'react';
import { AppProvider, Frame, Page, TopBar} from '@shopify/polaris';
import BannerContainer from '../components/BannerContainer';
import FeaturesContainer from '../components/FeaturesContainer'
import ActionItems from '../components/ActionItems'
import PircingContainer from '../components/PircingContainer'
import Footer from '../components/Footer'

export default class PageFrame extends React.Component {
  defaultState = {
  };

  state = {
  };

  render() {
    const {
    } = this.state;

   
    const topBarMarkup = (
      <TopBar userMenu={ActionItems}/>
    );

    const actualPageMarkup = (
      <Page fullWidth>
        <BannerContainer></BannerContainer>
        <FeaturesContainer></FeaturesContainer>
        <PircingContainer></PircingContainer>
      </Page>
    );

    const pageMarkup = actualPageMarkup;

    const theme = {
      colors: {
        topBar: {
          background: 'transparent',
        },
      },
      logo: {
        width: 124,
        topBarSource:
        require('../static/logo.png'),
        contextualSaveBarSource:
          'https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999',
        url: 'http://jadedpixel.com',
        accessibilityLabel: 'Jaded Pixel',
      },
    };

    return (
      <div style={{height: '100vh'}}>
        <AppProvider
          theme={theme}
          i18n={{
            Polaris: {}
          }}
        >
          <Frame topBar={topBarMarkup}>
            {pageMarkup}
            <Footer></Footer>
          </Frame>
        </AppProvider>
      </div>
    );
  }

}
