import React from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'

import PostList from 'components/presentational/PostList'


const mapStateToProps = (state) => {
  return {
    posts:    state.structure.posts,
  }
}

const mapDispatchToProps = (state) => {
  return {
    onSelectItem: (sectionURL) => {
      browserHistory.push(sectionURL)
    }
  }
}

const PostListContainer = connect(mapStateToProps, mapDispatchToProps)(PostList)

export default PostListContainer
