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

export default DocumentLayout
