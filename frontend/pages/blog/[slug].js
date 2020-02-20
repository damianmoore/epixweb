import fetch from 'isomorphic-unfetch'

import DocumentLayout from '../../components/DocumentLayout'
import {fuzzyDate, longDate} from '../../utils/date'
import {markdownToReact} from '../../utils/text'


const BlogPost = props => (
  <DocumentLayout title={props.post.name}>
    <h1>{props.post.name}</h1>
    <div className="date">{longDate(props.post.created)} ({fuzzyDate(props.post.created)})</div>
    {markdownToReact(props.post.content)}
    <style jsx>{`
      .date {
        margin: 16px 0 48px;
        font-weight: 700;
      }
    `}</style>
  </DocumentLayout>
)

BlogPost.getInitialProps = async function(context) {
  const { slug } = context.query
  let url = `/api/blog/${slug}`
  // When runnng server-side (i.e. visiting the URL route directly) relative
  // API URLs are not accepted. On the client-side we want it to be relative
  // as it could be on a variety of hosts and ports.
  if (typeof window === 'undefined') {
    url = 'http://localhost:3000' + url
  }

  const res = await fetch(url)
  const response = await res.json()

  return {
    post: response,
  }
}

export default BlogPost
