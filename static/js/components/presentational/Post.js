import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'components/Post.scss'

import BlogPostDetail from './detail/BlogPostDetail'
import FlickrAlbumDetail from './detail/FlickrAlbumDetail'
import ProjectDetail from './detail/ProjectDetail'


export default class Post extends React.Component {
  componentDidMount() {
    if (this.props.params.postType && this.props.params.slug) {
      this.props.onGetPost(this.props.params.postType, this.props.params.slug)
    }
  }

  render() {
    if (this.props.post) {
      var post = this.props.post

      var detailBody = ''
      if (this.props.post.type == 'blog') {
        detailBody = <BlogPostDetail post={post} />
      }
      else if (this.props.post.type == 'photos') {
        detailBody = <FlickrAlbumDetail post={post} />
      }
      else if (this.props.post.type == 'project') {
        detailBody = <ProjectDetail post={post} />
      }

      return detailBody
    }
    else {
      return <div></div>
    }
  }
}
