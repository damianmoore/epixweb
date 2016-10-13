import React from 'react'

import HeaderContainer from 'components/container/HeaderContainer'

import styles from 'components/IndexApp.scss'


export default class IndexApp extends React.Component {
  render() {
    return (
      <div>
        <HeaderContainer />
        {this.props.children}
      </div>
    )
  }
}
