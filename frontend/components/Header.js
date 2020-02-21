import Link from 'next/link'


const Header = () => (
  <>
    <header id="header">
      <div>
        <Link href="/"><a><img src="/static/img/logo.svg" /></a></Link>
        <h2 className="strapline">Stuff made by <Link href="/about"><a>Damian Moore</a></Link></h2>
      </div>
    </header>
    <style jsx>{`
      #header {
        padding: 40px 30px 30px 30px;
      }
      #header img {
        cursor: pointer;
        width: 250px;
      }
      #header .strapline {
        color: rgba(255,255,255,0.25);
        display: inline-block;
        line-height: 1;
        margin: 93px 0 0 30px;
        font-size: 18px;
        font-style: italic;
        font-weight: 400;
        vertical-align: top;
      }
      #header a {
        color: rgba(255,255,255,0.33);
      }
      @media only screen and (max-width: 600px) {
        #header img {
          width: 200px;
          display: block;
        }
        #header .strapline {
          display: block;
          margin: 20px 0 0 0;
        }
      }
    `}</style>
  </>
)

export default Header
