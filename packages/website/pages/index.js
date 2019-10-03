import React from 'react'
import Head from 'next/head'
import "../style/page.css"

import PageFrame from '../components/PageFrame'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' importance='low' />
      <link rel="stylesheet" href="https://unpkg.com/@shopify/polaris@4.2.1/styles.min.css"/>
      <link rel="stylesheet" href="/static/style.css"/>
    </Head>
    <PageFrame></PageFrame>
  </div>
)

export default Home
