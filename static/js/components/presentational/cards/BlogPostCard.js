import React from 'react'
import { Link } from 'react-router'

import styles from 'components/Card.scss'


export default class BlogPostCard extends React.Component {
  render() {
    return (
      <div>
        <i className={'material-icons md-18 ' + styles.cardTypeIcon}>insert_drive_file</i>
        <h1>{this.props.post.name}</h1>
        <p>...</p>
      </div>
    )
  }
}
