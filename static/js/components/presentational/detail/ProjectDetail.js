import React from 'react'

import modalStyles from 'Modal.scss'


export default class ProjectDetail extends React.Component {
  render() {
    var post = this.props.post
    return (
      <div className={modalStyles.blackout} onClick={this.props.onClickBlackout}>
        <div className={modalStyles.window}>
          <h1>{post.name}</h1>
        </div>
      </div>
    )
  }
}
