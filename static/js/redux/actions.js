import fetch from 'isomorphic-fetch'


export const RESET_PAGE = 'RESET_PAGE'
export const resetPage = () => {
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

export const GET_POST = 'GET_POST'
export const getPost = (type, slug) => {
  return dispatch => {
    return fetch('/api/' + type + '/' + slug + '/')
      .then(response => response.json())
      .then(json => dispatch(receivePost(json)))
  }
  return {
    type:     GET_POST,
  }
}

export const RECEIVE_POST = 'RECEIVE_POST'
export const receivePost = (post) => {
  return {
    type:     RECEIVE_POST,
    post:     post,
  }
}
