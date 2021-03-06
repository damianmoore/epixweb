import React from 'react'
import { Link } from 'react-router-dom'

import styles from 'components/Card.scss'


export default class ProjectCard extends React.Component {
  render() {
    return (
      <div>
        <i className={'material-icons md-18 ' + styles.cardTypeIcon} title="Project">format_paint</i>
        <h1>{this.props.post.name}</h1>
        <p>...</p>
      </div>
    )
  }
}
