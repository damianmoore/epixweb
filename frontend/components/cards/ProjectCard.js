const BlogPostCard = (props) => (
  <>
    {/* <i className="material-icons md-18" title="Blog post">insert_drive_file</i> */}
    <h1>{props.post.name}</h1>
    <p>{props.post.summary}</p>
    <style jsx>{`
      h1 {
        font-weight: 700;
        font-size: 14px;
        color: #21272f;
        line-height: 1.1;
        margin-bottom: 4px;
      }
      h2 {
        font-size: 13px;
        color: #999;
        line-height: 1.1;
        margin: 0 0 4px;
      }
      p {
        font-size: 12px;
        color: #999;
        line-height: 1.2;
        margin: 12px 0 4px;
      }
    `}</style>
  </>
)

export default BlogPostCard
