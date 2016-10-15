import React from 'react'
import PostListContainer from 'components/container/PostListContainer'

import styles from 'components/Contact.scss'
import modalStyles from 'Modal.scss'


export default class Contact extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <div>
          <div className={modalStyles.blackout} onClick={this.props.onClickBlackout}></div>
          <div className={modalStyles.window}>
            <h1>Contact</h1>
          </div>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}
