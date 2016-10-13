import React from 'react'
import { Link } from 'react-router'

import styles from 'components/Post.scss'


export default class Post extends React.Component {
  render() {
    var posts = []
    for (var post of this.props.posts) {
      posts.push(<li>{post.title}</li>)
    }

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Post</h1>
        </div>
        <div className={styles.preview}>
          <p>content</p>
        </div>
      </div>
    )
  }
}
