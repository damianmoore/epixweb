import React from 'react'
import { Link } from 'react-router'

import styles from 'components/Card.scss'


export default class Card extends React.Component {
  render() {
    return (
      <li className={styles.container}>
        <div className={styles.header}>
          <h1>{this.props.post.name}</h1>
        </div>
        <div className={styles.preview}>
          <p>...</p>
        </div>
      </li>
    )
  }
}
