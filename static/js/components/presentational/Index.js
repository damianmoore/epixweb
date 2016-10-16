import React from 'react'
import { Link } from 'react-router'

import ContactContainer from 'components/container/ContactContainer'
import PostContainer from 'components/container/PostContainer'
import PostListContainer from 'components/container/PostListContainer'

import styles from 'components/Index.scss'


export default class Overview extends React.Component {
  componentDidMount() {
    this.props.onGetPosts()
  }

  render() {
    return (
      <div className={styles.container}>
        <ContactContainer />
        <PostContainer />
        <PostListContainer />
      </div>
    )
  }
}
