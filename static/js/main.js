import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import { Provider } from 'react-redux'

import IndexApp from 'components/container/IndexApp'
import IndexContainer from 'components/container/IndexContainer'
import PostContainer from 'components/container/PostContainer'
import ContactContainer from 'components/container/ContactContainer'

import * as reducers from 'redux/reducers'


const store = createStore(
  combineReducers(reducers),
  {},
  compose(
    applyMiddleware(thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={IndexApp}>
        <IndexRoute component={IndexContainer} />
        <Route path="blog/*" component={IndexContainer} />
        <Route path="photos/*" component={IndexContainer} />
        <Route path="project/*" component={IndexContainer} />
        <Route path="contact" component={IndexContainer} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'))
