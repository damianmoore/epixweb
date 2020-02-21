import Head from 'next/head'
import Header from './Header'
import Analytics from './Analytics'


const Layout = props => (
  <>
    <Head>
      <title>{props.title ? props.title + ' | EpixStudios by Damian Moore' : 'EpixStudios by Damian Moore'}</title>
      <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=block" rel="stylesheet" />
      <link rel="icon" href="/static/img/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="/static/img/favicon-192x192.png" sizes="192x192" />
      <meta name="description" content={props.description} />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={props.title ? props.title : 'EpixStudios by Damian Moore'} />
      <meta property="og:description" content={props.description} />
      <meta property="og:site_name" content="Free Documentary Streaming" />
      <meta property="og:image" content={props.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:site" content="@damianmoore" />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:creator" content="@damianmoore" />
    </Head>

    <div id="main-container">
      <Header />
      {props.children}
    </div>
  
    <Analytics />

    <style jsx global>{`
      /*! minireset.css v0.0.6 | MIT License | github.com/jgthms/minireset.css */html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*::before,*::after{box-sizing:inherit}img,video{height:auto;max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:left}

      html, body, div, span, h1, h2, h3, p, a, img, ul, li, footer, header, section {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
      }
      
      footer, header, section {
        display: block;
      }
      
      ul {
        list-style: none;
      }
      
      body {
        background: #21272f;
        color: #323f49;
        font-family: 'Lato', Arial, sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        -webkit-font-smoothing: antialiased;
        // overflow: hidden;
      }
      
      *, *:before, *:after {
        box-sizing: border-box;
      }
      
      h1 {
        font-size: 32px;
        margin-bottom: 16px;
        font-weight: 700;
        color: #323f49;
        line-height: 40px;
      }
      
      h2 {
        font-size: 24px;
        margin: 48px 0 24px;
        font-weight: 600;
      }
      
      h3 {
        font-size: 18px;
        margin: 24px 0 16px;
        font-weight: 600;
      }
      
      p {
        margin-bottom: 16px;
      }
      
      ul {
        list-style: disc;
        margin: 0 0 16px 16px;
        padding: 0 0 0 20px;
      }

      ol {
        margin: 0 0 16px 16px;
        padding: 0 0 0 20px;
      }

      li {
        margin-bottom: 8px;
      }

      a {
        outline: 0;
      }
      
      pre {
        padding: 12px 16px;
        margin-bottom: 16px;
        overflow: auto;
        font-size: 85%;
        background-color: #f6f8fa;
        border-radius: 3px;
        border-left: 5px solid #ddd;
      }

      pre code {
        background: none;
        padding: 0;
      }
      
      code {
        padding: 0;
        padding: 0.2em 0.5em;
        margin: 0;
        font-size: 85%;
        background-color: rgba(27,31,35,0.05);
        border-radius: 3px;
      }

      #main-container {
        position: fixed;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: scroll;
      }
    `}</style>
  </>
)

export default Layout
