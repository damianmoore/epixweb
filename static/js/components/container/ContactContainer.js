import React from 'react'
import { connect } from 'react-redux'

import { resetPage, showContact } from 'redux/actions'
import Contact from 'components/presentational/Contact'


const mapStateToProps = (state, ownProps) => {
  var show = false
  if (state.structure.uri == '/contact/') {
    show = true
  }
  return {
    show:   show,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickBlackout: () => {
      dispatch(resetPage())
    }
  }
}

const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact)

export default ContactContainer
