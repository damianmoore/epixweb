import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'components/Header.scss'


export default class Header extends React.Component {
  render() {
    return (
      <header id={styles.header}>
        <div>
          <Link to="/"><img src="/static/img/logo.svg" onClick={this.props.onClickLogo} /></Link>
          {/* <h2 className={styles.strapline}>Stuff made by <Link to="/contact/">Damian</Link>…</h2> */}
          <h2 className={styles.strapline}>Stuff made by <span onClick={this.props.onClickContact}>Damian</span>…</h2>
        </div>
      </header>
    )
  }
}
