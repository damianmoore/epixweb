import React from 'react'

import styles from 'components/Header.scss'


export default class Header extends React.Component {
  render() {
    return (
      <header id={styles.header}>
        <div>
          <img src="/static/img/logo.svg" onClick={() => this.props.onClickLogo()} />
        </div>
      </header>
    )
  }
}
