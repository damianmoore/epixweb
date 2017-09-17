import React from 'react'
import { connect } from 'react-redux'

import { getPosts } from 'redux/actions'
import Index from 'components/presentational/Index'


const mapStateToProps = (state) => {
  return {
    posts:    state.structure.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => {
      dispatch(getPosts())
    }
  }
}

const IndexContainer = connect(mapStateToProps, mapDispatchToProps)(Index)

export default IndexContainer
