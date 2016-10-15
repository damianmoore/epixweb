import React from 'react'
import { Link } from 'react-router'

import styles from 'components/Card.scss'


export default class FlickrAlbumCard extends React.Component {
  render() {
    return (
      <div>
        <i className={'material-icons md-18 ' + styles.cardTypeIcon} title="Photo album">photo_library</i>
        <h1>{this.props.post.name}</h1>
        <h2>Photo Album</h2>
      </div>
    )
  }
}
