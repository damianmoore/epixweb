import marked from 'marked'

import GalleryImages from '../components/GalleryImages'


export function prettyDuration(ms) {
  if (ms < 1000 * 60 * 60) {
    return Math.floor(ms / (1000 * 60)) + 'm'
  }
  else {
    const hours = Math.floor(ms / (1000 * 60 * 60))
    const minutes = Math.floor(ms / (1000 * 60)) - (hours * 60)
    return hours + 'h ' + minutes + 'm'
  }
}

export function markdownToReact(content) {
  // Takes markdown and returns an array of React elements.
  // This handles extensions we make to markdown such as for <GalleryImages />.

  let contentComponents = content.split(/(\[!gallery-images .+?\]\])/)
  let contentElements = contentComponents.map((el, index) => {
    if (el.startsWith('[!gallery-images ')) {
      let images = JSON.parse(el.match(/\[!gallery-images (.+?\])\]/)[1])
      return <GalleryImages images={images} key={index} />
    }
    else {
      return <div dangerouslySetInnerHTML={{ __html:  marked(el) }} key={index} />
    }
  })
  return contentElements
}
