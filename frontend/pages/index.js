import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import PostList from '../components/PostList'


export default function Index({ data }) {
  let results = data?.results

  return (
    <Layout description="This is the personal site of Damian Moore. It documents the projects I've worked on and things that interest me.">
      <PostList posts={results} />
    </Layout>
  )
}

Index.getInitialProps = async function(context) {
  let url = '/api/posts'
  // When runnng server-side (i.e. visiting the URL route directly) relative
  // API URLs are not accepted. On the client-side we want it to be relative
  // as it could be on a variety of hosts and ports.
  if (typeof window === 'undefined') {
    url = 'http://localhost:3000' + url
  }

  const res = await fetch(url)
  const response = await res.json()

  return {
    data: response,
  }
}
