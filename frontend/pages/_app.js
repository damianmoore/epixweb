import React from 'react'
import App from 'next/app'
import Router from 'next/router';
import { trackPageView } from '../helpers';

// import Nav from '../components/nav'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return ( 
      <>
        {/* <Nav /> */}
        <Component {...pageProps} />
      </>
    );
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    }
  }
}

export default MyApp 

