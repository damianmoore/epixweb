import React from 'react'
import { Link } from 'react-router-dom'

import Masonry from 'react-masonry-component'

import CardContainer from 'components/container/CardContainer'
import styles from 'components/PostList.scss'


var masonryOptions = {
  itemSelector: 'li',
  columnWidth:  250,
  fitWidth:     true,
  gutter:       30,
  stagger:      100,
}

export default class PostList extends React.Component {

  render() {
    let posts = []
    if (this.props.posts) {
      posts = this.props.posts.map(function(post) {
        return <CardContainer key={`${post.type}/${post.slug}`} post={post} />
      })

      return (
        <Masonry
          className={styles.container}
          elementType={'ul'}
          options={masonryOptions}
        >
          {posts}
        </Masonry>
      )
    }
    else {
      return <div></div>
    }
  }
}
