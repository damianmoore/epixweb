import React, {useState} from 'react'
import Masonry from 'react-masonry-component'
import { motion } from 'framer-motion'

import Card from '../components/Card'


let initializedEmpty = false

const PostList = (props) => {
  let  [, setState] = useState()
  
  function handleUpdate() {
    // passing empty object re-renders the component
    setState({})
  }
  
  if (props.posts) {
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

    const motionConfig = {
      type: 'spring',
      damping: 20,
      stiffness: 100
    }

    let masonryOptions = {
      itemSelector: 'li',
      columnWidth:  250,
      fitWidth:     true,
      gutter:       30,
      stagger:      100,
    }

    return (
      <>
        <motion.div
          transition={motionConfig}
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          id="masonry-container"
        >
          <Masonry
            elementType={'ul'}
            options={masonryOptions}
            id="masonry-block"
          >
            {posts}
          </Masonry>
        </motion.div>

        <style jsx global>{`
          #masonry-container {
            padding: 0 30px;
          }
          #masonry-container ul {
            padding: 0;
          }
          #masonry-block {
            margin: 30px auto;
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
