import React, { useState, useCallback } from "react"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"


const GalleryImages = props => {
  let photos = props.images

  const [currentImage, setCurrentImage] = React.useState(0)
  const [viewerIsOpen, setViewerIsOpen] = React.useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  return (
    <>
      <div className="gallery">
        <Gallery photos={photos.map(x => ({
                  ...x,
                  sizes: '250px',
                }))} targetRowHeight={150} onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={photos.map(x => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title,
                }))}
                />
            </Modal>
          ) : null}
        </ModalGateway>
      </div>
      <style jsx>{`
        .gallery {
          margin: -2px -2px 14px -2px
        }
      `}</style>
    </>
  )
}

export default GalleryImages
