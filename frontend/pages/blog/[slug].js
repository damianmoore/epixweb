import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'
import marked from 'marked'

import Layout from '../../components/MyLayout'
import GalleryImages from '../../components/GalleryImages'


const BlogPost = props => {
  const router = useRouter()

  let contentComponents = props.post.content.split(/(\[!gallery-images .+?\]\])/)
  let contentElements = contentComponents.map((el, index) => {
    if (el.startsWith('[!gallery-images ')) {
      let images = JSON.parse(el.match(/\[!gallery-images (.+?\])\]/)[1])
      return <GalleryImages images={images} key={index} />
    }
    else {
      return <div dangerouslySetInnerHTML={{ __html:  marked(el) }} key={index} />
    }
  })

  return (
    <Layout title={props.post.name}>
      <div className="container">
        <div className="content">
          <h1>{props.post.name}</h1>
          {contentElements}
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 30px auto;
          padding: 30px;
        }
        .content {
          background: #fff;
          padding: 30px 30px 14px 30px;
          border-radius: 4px;
        }
      `}</style>
    </Layout>
  )
}

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
