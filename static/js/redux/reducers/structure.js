import { GET_POSTS } from 'redux/actions'


const initialState = {
  posts: loadPosts(),

  filters: {
    orderBy: 'most-recent'
  },
}

function loadPosts() {
  // TODO: Ajax
  return [
    {
      type: 'project',
      name: 'Internet radio alarm clock'
    },
    {
      type: 'flickr-album',
      name: 'London Album',
      url:  'https://www.flickr.com/photos/damianmoore/albums/72157649413678702',
      coverImage: 'https://farm7.staticflickr.com/6143/5975987832_a99a863040_z_d.jpg',
    },
    {
      type: 'project',
      name: 'Music streaming system'
    },
    {
      type: 'project',
      name: 'Wifi Lamp'
    },
    {
      type: 'project',
      name: 'Picture frame'
    },
    {
      type: 'project',
      name: 'Laser etched wood inspired by The Grand Budapest Hotel'
    },
    {
      type: 'project',
      name: 'Internet controlled underfloor heating system'
    },
  ]
}

export default function structure(state = initialState, action) {
  if (action.type == GET_POSTS) {
    // TODO: Load filtered posts in
  }

  return state
}
