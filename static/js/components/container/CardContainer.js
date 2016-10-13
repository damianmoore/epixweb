import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Card from 'components/presentational/Card'


const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogo: (section) => {
      // This should be changed to a dispatch
      browserHistory.push('/')
    }
  }
}

const CardContainer = connect(null, mapDispatchToProps)(Card)

export default CardContainer
