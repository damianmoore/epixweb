import React from 'react'
import { connect } from 'react-redux'

import { getPosts } from 'redux/actions'
import Index from 'components/presentational/Index'


const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => {
      dispatch(getPosts())
    }
  }
}

const IndexContainer = connect(null, mapDispatchToProps)(Index)

export default IndexContainer
