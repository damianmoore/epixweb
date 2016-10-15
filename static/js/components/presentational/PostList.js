import React from 'react'
import { Link } from 'react-router'

import Masonry from 'masonry-layout'

import CardContainer from 'components/container/CardContainer'
import styles from 'components/PostList.scss'


export default class PostList extends React.Component {
  componentDidMount() {
    new Masonry(this.refs.grid, {
      itemSelector: 'li',
      columnWidth: 250,
      fitWidth: true,
      gutter: 30,
      stagger: 100,
      // initLayout: false,
    })
  }

  render() {
    var posts = []
    for (var post of this.props.posts) {
      posts.push(<CardContainer key={post.name} post={post} />)
    }

    return (
      <ul id="grid" ref="grid" className={styles.container}>
        {posts}
      </ul>
    )
  }
}
