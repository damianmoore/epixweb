import fetch from 'isomorphic-unfetch'
import { useRouter } from 'next/router'
import css from 'styled-jsx/css'
import Masonry from 'react-masonry-component'
import React, {useState} from 'react';

import Layout from '../components/MyLayout'
import Card from '../components/Card'


let numRenders = 0

export default function Index({ data }) {
  const { query } = useRouter()
  let  [, setState] = useState()

  function handleUpdate() {
    // passing empty object re-renders the component
    setState({})
  }

  let results = data?.results
  let masonryOptions = {
    itemSelector: 'li',
    columnWidth:  250,
    fitWidth:     true,
    gutter:       30,
    stagger:      100,
  }
  const imagesLoadedOptions = { background: '.my-bg-image-el' }
  const { className, styles } = css.resolve`
    {
      margin: 30px auto;
      padding: 0;
    }
    :hover li {
      opacity: 0.66;
    }
    :hover li:hover {
      opacity: 1;
    }

    @media (max-width: 768px) {
       {
        margin: 0;
        padding: 0;
      }
    }
  `

  let posts = []
  if (results) {

    if (typeof window !== 'undefined' && numRenders == 0) {
      posts = []
      numRenders += 1
      setTimeout(handleUpdate, 1)
    }
    else {
      posts = results.map(function(post, index) {
        return <Card post={post} key={index} />
      })
    }

    return (
      <Layout>
        <div className="masonryContainer">
          <Masonry
            className={className}
            elementType={'ul'}
            options={masonryOptions}
          >
            {posts}
          </Masonry>
        </div>

        {styles}
        <style jsx>{`
          .masonryContainer {
            padding: 30px;
          }
        `}</style>
        <style jsx global>{`
          .masonryContainer ul:hover li {
            opacity: 0.8;
          }
          .masonryContainer ul:hover li:hover {
            opacity: 1;
          }
        `}</style>
      </Layout>
    )
  }
  else {
    return <div></div>
  }
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
