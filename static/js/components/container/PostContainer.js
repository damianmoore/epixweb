import React from 'react'
import { connect } from 'react-redux'

import Post from 'components/presentational/Post'


const PostContainer = connect()(Post)

export default PostContainer
