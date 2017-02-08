import { RESET_PAGE, GET_POSTS, RECEIVE_POSTS, SET_URI } from 'redux/actions'


const initialState = {
  posts: [],

  filters: {
    orderBy: 'most-recent',
  },

  uri: window.location.pathname,

  loading: false,
}

export default function structure(state = initialState, action) {
  if (action.type == RESET_PAGE) {
    return Object.assign({}, state, {
      showContact:  false,
      uri:          '/',
    })
  }
  if (action.type == GET_POSTS) {
    if (!state.loading) {
      return Object.assign({}, state, {
        loading: true,
      })
    }
  }
  if (action.type == RECEIVE_POSTS) {
    return Object.assign({}, state, {
      posts:    action.posts,
      loading:  false,
    })
  }
  if (action.type == SET_URI) {
    return Object.assign({}, state, {
      uri: action.uri,
    })
  }

  return state
}
