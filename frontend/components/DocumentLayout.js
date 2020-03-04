import Layout from '../components/Layout';

const DocumentLayout = props => {
  return (
    <Layout title={props.title} description={props.description} image={props.image}>
      <div className="container">
        <div className="content">
          {props.children}
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 900px;
          margin: 30px auto;
        }
        .content {
          background: #fff;
          padding: 30px 30px 14px 30px;
          border-radius: 4px;
        }
        @media only screen and (max-width: 940px) {
          .container {
            max-width: 100%;
            margin: 0;
          }
          .content {
            border-radius: 0;
          }
        }
        @media only screen and (max-width: 600px) {
          .content {
            padding: 30px 20px 4px 20px;
          }
        }
      `}</style>
    </Layout>
  )
}

export default DocumentLayout
