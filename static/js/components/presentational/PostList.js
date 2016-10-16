import React from 'react'
import { Link } from 'react-router'

// import Masonry from 'masonry-layout'
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
    var posts = []
    if (this.props.posts) {
      for (var post of this.props.posts) {
        posts.push(<CardContainer key={post.name} post={post} />)
      }

      return (
        <Masonry
          className={styles.container} // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
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
