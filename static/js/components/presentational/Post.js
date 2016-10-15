import React from 'react'
import { Link } from 'react-router'

import styles from 'components/Post.scss'
import modalStyles from 'Modal.scss'


export default class Post extends React.Component {
  render() {
    if (this.props.post) {
      var post = this.props.post

      var coverImage = ''
      if (post.coverImage) {
        coverImage = <div className={styles.coverImage} style={{backgroundImage: 'url(' + post.coverImage + ')'}}></div>
      }

      return (
        <div>
          <div className={modalStyles.blackout} onClick={this.props.onClickBlackout}></div>
          <div className={modalStyles.window}>
            <h1>{post.name}</h1>
            {coverImage}
          </div>
        </div>
      )
    }
    else {
      return <div></div>
    }
  }
}
