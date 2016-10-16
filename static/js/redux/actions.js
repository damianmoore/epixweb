import { browserHistory } from 'react-router'
import fetch from 'isomorphic-fetch'


export const RESET_PAGE = 'RESET_PAGE'
export const resetPage = () => {
  browserHistory.push('/')
  return {
    type:     RESET_PAGE,
  }
}

export const GET_POSTS = 'GET_POSTS'
export const getPosts = (filters) => {
  return dispatch => {
    return fetch('/api/posts/')
      .then(response => response.json())
      .then(json => dispatch(receivePosts(json)))
  }
  return {
    type:     GET_POSTS,
    filters:  filters,
  }
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const receivePosts = (posts) => {
  return {
    type:     RECEIVE_POSTS,
    posts:    posts,
  }
}

export const SET_URI = 'SET_URI'
export const setUri = (uri) => {
  browserHistory.push(uri)
  return {
    type:     SET_URI,
    uri:      uri,
  }
}
