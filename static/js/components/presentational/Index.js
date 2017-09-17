import React from 'react'
import { Link } from 'react-router-dom'

import ContactContainer from 'components/container/ContactContainer'
import PostContainer from 'components/container/PostContainer'
import PostListContainer from 'components/container/PostListContainer'

import styles from 'components/Index.scss'


export default class Overview extends React.Component {
  componentDidMount() {
    if (!this.props.posts.length) {
      this.props.onGetPosts()
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <ContactContainer />
        <PostContainer params={this.props.params} />
        <PostListContainer />
      </div>
    )
  }
}
