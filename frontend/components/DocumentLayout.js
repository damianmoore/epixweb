import Layout from '../components/Layout';

const DocumentLayout = props => {
  return (
    <Layout title={props.title}>
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
      `}</style>
    </Layout>
  )
}

export default DocumentLayout