import css from 'styled-jsx/css'
import React, {useState} from 'react'
import Masonry from 'react-masonry-component'

import Card from '../components/Card'


let initializedEmpty = false

const PostList = (props) => {
  let  [, setState] = useState()
  
  function handleUpdate() {
    // passing empty object re-renders the component
    setState({})
    document.getElementById('masonryContainer').style.marginTop = 0
  }
  
  if (props.posts) {
    let masonryOptions = {
      itemSelector: 'li',
      columnWidth:  250,
      fitWidth:     true,
      gutter:       30,
      stagger:      100,
    }
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
  
    if (typeof window !== 'undefined' && !initializedEmpty) {
      initializedEmpty = true
      setTimeout(handleUpdate, 1)
    }
    else {
      posts = props.posts.map(function(post, index) {
        return <Card post={post} key={index} />
      })
    }

    return (
      <>
        <div id="masonryContainer">
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
          #masonryContainer {
            padding: 30px;
            margin-top: 100vh;
            transition: 500ms all;
          }
        `}</style>
      </>
    )
  }
  else {
    return <></>
  }
}

export default PostList
