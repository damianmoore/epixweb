import React from 'react'
import { browserHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import PostList from 'components/presentational/PostList'


const mapStateToProps = (state) => {
  return {
    posts:    state.structure.posts,
  }
}

const PostListContainer = connect(mapStateToProps, null)(PostList)

export default PostListContainer
