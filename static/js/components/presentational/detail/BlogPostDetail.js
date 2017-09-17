import React from 'react'

import {fuzzyDate, longDate} from 'utils'

import modalStyles from 'Modal.scss'
import blogStyles from 'components/detail/BlogPostDetail.scss'


export default class BlogPostCard extends React.Component {
  render() {
    var post = this.props.post
    return (
      <div className={modalStyles.blackout} onClick={this.props.onClickBlackout}>
        <div className={modalStyles.window}>
          <div className={blogStyles.container}>
            <h1>{post.name}</h1>
            <div className={blogStyles.date}>{longDate(post.created)} ({fuzzyDate(post.created)})</div>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
          </div>
        </div>
      </div>
    )
  }
}
