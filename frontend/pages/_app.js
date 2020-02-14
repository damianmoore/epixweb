import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { trackPageView } from '../helpers'


class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Component {...pageProps} key={router.pathname} />
    )
  }

  componentDidMount() {
    Router.onRouteChangeComplete = url => {
      trackPageView(url);
    }
  }
}

export default MyApp 
