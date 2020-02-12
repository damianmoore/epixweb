import Link from 'next/link'

import BlogPostCard from './cards/BlogPostCard'


const Card = (props) => {
  let uri = ''
  if (props.post.type && props.post.slug) {
    uri = '/' + props.post.type + '/' + props.post.slug + '/'
  }

  let coverImage = ''
  if (props.post.coverImage) {
    coverImage = <div className={styles.coverImage} style={{backgroundImage: 'url(' + props.post.coverImage + ')'}}></div>
  }

  let cardBody = ''
  if (props.post.type == 'blog') {
    cardBody = <BlogPostCard post={props.post} />
  }
  else if (props.post.type == 'photos') {
    cardBody = <FlickrAlbumCard post={props.post} />
  }
  else if (props.post.type == 'project') {
    cardBody = <ProjectCard post={props.post} />
  }

  return (
    <>
      <Link href={uri}>
        <a>
          <li className="container">
            {coverImage}
            {cardBody}
          </li>
        </a>
      </Link>

      <style jsx>{`
        .container {
          background: #fff;
          color: #000;
          border-radius: 4px;
          display: block;
          width: 250px;
          margin-bottom: 30px;
          padding: 10px;
          vertical-align: top;
          transition: .8s opacity;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

export default Card
