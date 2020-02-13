import Link from 'next/link'

import BlogPostCard from './cards/BlogPostCard'


const Card = (props) => {
  let uriHref = ''
  let uriAs = ''
  if (props.post.type && props.post.slug) {
    uriHref = '/' + props.post.type + '/[slug]/'
    uriAs = '/' + props.post.type + '/' + props.post.slug + '/'
  }

  let coverImage = ''
  if (props.post.coverImage) {
    coverImage = (
      <>
        <div className="coverImage" style={{backgroundImage: 'url(' + props.post.coverImage + ')'}}></div>
        <style jsx>{`
          .coverImage {
            width: 246px;
            height: 164px;
            background-size: cover;
            background-position: center;
            margin: -8px -8px 10px -8px;
            border-radius: 3px;
          }
        `}</style>
      </>
    )
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
      <Link href={uriHref} as={uriAs}>
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
          width: 250px;
          margin: 0 30px 30px 0;
          padding: 10px;
          vertical-align: top;
          cursor: pointer;
          list-style: none;
          float: left;
        }
        a .container {
          text-decoration: none;
        }
        a {
          transition: 300ms opacity;
        }
        a:hover {
          opacity: 0.9;
        }
      `}</style>
    </>
  )
}

export default Card
