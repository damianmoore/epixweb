import React from 'react'

import HeaderContainer from 'components/container/HeaderContainer'
import IndexContainer from 'components/container/IndexContainer'

import styles from 'components/IndexApp.scss'


export default class IndexApp extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <HeaderContainer />
        <IndexContainer params={this.props.match.params} />
      </div>
    )
  }
}
