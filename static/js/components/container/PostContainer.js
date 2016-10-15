import React from 'react'
import { connect } from 'react-redux'

import { resetPage } from 'redux/actions'

import Post from 'components/presentational/Post'


const mapStateToProps = (state, ownProps) => {
  var uri = state.structure.uri
  var post = null
  if (uri.startsWith('/blog/') || uri.startsWith('/photos/') || uri.startsWith('/project/')) {
    var path = uri.split('/')
    var posts = state.structure.posts.filter(function(post){
      return post.type == path[1] && post.slug == path[2]
    })
    if (posts[0]) {
      post = posts[0]
    }
  }
  return {
    uri: uri,
    post: post,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickBlackout: () => {
      dispatch(resetPage())
    }
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer
