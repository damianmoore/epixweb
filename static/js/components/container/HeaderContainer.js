import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import Header from 'components/presentational/Header'


const mapDispatchToProps = (dispatch) => {
  return {
    onClickLogo: (section) => {
      // This should be changed to a dispatch
      browserHistory.push('/')
    }
  }
}

const HeaderContainer = connect(null, mapDispatchToProps)(Header)

export default HeaderContainer
