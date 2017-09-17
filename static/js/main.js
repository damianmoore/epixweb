import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { BrowserRouter as Router, Route, Link, browser } from 'react-router-dom'
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
    <Router>
      <div>
        <Route exact path="/" component={IndexApp}/>
        <Route path="/contact/" component={IndexApp} />
        <Route path="/:postType/:slug/" component={IndexApp} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'))
