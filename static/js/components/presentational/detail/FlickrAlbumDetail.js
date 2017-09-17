import React from 'react'
import { Link } from 'react-router-dom'
import Gallery from 'react-photo-gallery';

import modalStyles from 'Modal.scss'


export default class FlickrAlbumDetail extends React.Component {
  render() {
    let post = this.props.post

    let coverImage = ''
    if (post.coverImage) {
      coverImage = <img src={post.coverImage } />
    }

    let gallery = <Gallery photos={post.photos} />

    return (
      <div className={modalStyles.blackout} onClick={this.props.onClickBlackout}>
        <div className={modalStyles.windowDark}>
          <h1>{post.name}</h1>
          {/* {coverImage} */}
          {gallery}
        </div>
      </div>
    )
  }
}
