import { browserHistory } from 'react-router'

export const RESET_PAGE = 'RESET_PAGE'
export const GET_POSTS = 'GET_POSTS'
export const SET_URI = 'SET_URI'


export const resetPage = () => {
  browserHistory.push('/')
  return {
    type:     RESET_PAGE,
  }
}

export const getPosts = (filters) => {
  return {
    type:     GET_POSTS,
    filters:  filters,
  }
}

export const setUri = (uri) => {
  browserHistory.push(uri)
  return {
    type:     SET_URI,
    uri:      uri,
  }
}
