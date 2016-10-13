export const GET_POSTS = 'GET_POSTS'


export const getPosts = (filters) => {
  return {
    type:     GET_POSTS,
    filters:  filters
  }
}
