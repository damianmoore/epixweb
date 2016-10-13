import React from 'react'
import { Link } from 'react-router'

import styles from 'components/Card.scss'
import BlogPostCard from './cards/BlogPostCard'
import FlickrAlbumCard from './cards/FlickrAlbumCard'
import ProjectCard from './cards/ProjectCard'


export default class Card extends React.Component {
  render() {
    var coverImage = ''
    if (this.props.post.coverImage) {
      coverImage = <div className={styles.coverImage} style={{backgroundImage: 'url(' + this.props.post.coverImage + ')'}}></div>
    }

    var cardBody = ''
    if (this.props.post.type == 'article') {
      cardBody = <BlogPostCard post={this.props.post} />
    }
    else if (this.props.post.type == 'flickr-album') {
      cardBody = <FlickrAlbumCard post={this.props.post} />
    }
    else if (this.props.post.type == 'project') {
      cardBody = <ProjectCard post={this.props.post} />
    }

    return (
      <li className={styles.container}>
        {coverImage}
        {cardBody}
        {/* <div className={styles.actions}>
          <i className="material-icons md-24">star_border</i>
          <i className="material-icons md-18">share</i>
        </div> */}
      </li>
    )
  }
}
