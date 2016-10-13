import React from 'react'
import { Link } from 'react-router'

import PostListContainer from 'components/container/PostListContainer'
import styles from 'components/Index.scss'


export default class Overview extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <PostListContainer />
      </div>
    )
  }
}
