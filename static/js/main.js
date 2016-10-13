import React from 'react'
import { render } from 'react-dom'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import IndexApp from 'components/container/IndexApp'
import IndexContainer from 'components/container/IndexContainer'
import PostContainer from 'components/container/PostContainer'

import * as reducers from 'redux/reducers'


const store = createStore(combineReducers(reducers))

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={IndexApp}>
        <IndexRoute component={IndexContainer} />
        <Route path="/post/" component={PostContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
