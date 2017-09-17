import React from 'react'
import { connect } from 'react-redux'

import { resetPage, setUri } from 'redux/actions'
import Header from 'components/presentational/Header'


const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogo: () => {
      dispatch(resetPage())
    },
    onClickContact: () => {
      dispatch(setUri('/contact/'))
    },
  }
}

const HeaderContainer = connect(null, mapDispatchToProps)(Header)

export default HeaderContainer
