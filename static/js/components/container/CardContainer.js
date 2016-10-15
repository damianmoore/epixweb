import React from 'react'
import { connect } from 'react-redux'

import { setUri } from 'redux/actions'
import Card from 'components/presentational/Card'


const mapDispatchToProps = (dispatch) => {
  return {
    onSelectItem: (uri) => {
      dispatch(setUri(uri))
    }
  }
}

const CardContainer = connect(null, mapDispatchToProps)(Card)

export default CardContainer
