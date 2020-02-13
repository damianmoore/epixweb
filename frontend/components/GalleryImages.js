const GalleryImages = props => (
  <>
    <ul className="gallery">
      {props.images.map((url) => (
        <li style={{backgroundImage: `url(${url}`}}></li>
      ))}
    </ul>
    <style jsx>{`
      .gallery {
        background: #000;
        margin: 0 0 16px 0;
        padding: 10px 0 0 10px;
      }
      .gallery li {
        width: 100px;
        height: 100px;
        display: inline-block;
        overflow: hidden;
        margin: 0 10px 10px 0;
        background-size: cover;
        background-position: center;
        vertical-align: bottom;
      }
    `}</style>
  </>
)

export default GalleryImages
