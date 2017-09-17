import React from 'react'
import { connect } from 'react-redux'

import { resetPage, getPost } from 'redux/actions'

import Post from 'components/presentational/Post'


const mapStateToProps = (state, props) => {
  var uri = state.structure.uri
  var post = null
  if (props.params.postType && props.params.slug) {
    var posts = state.structure.posts.filter(function(post){
      return post.type == props.params.postType && post.slug == props.params.slug
    })
    if (posts[0]) {
      post = posts[0]
    }
    if (state.structure.post && state.structure.post.type == props.params.postType && state.structure.post.slug == props.params.slug) {
      post = state.structure.post
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
    },
    onGetPost: (type, slug) => {
      dispatch(getPost(type, slug))
    }
  }
}

const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post)

export default PostContainer
