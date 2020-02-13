import Link from 'next/link'


const Header = () => (
  <>
    <header id="header">
      <div>
        <Link href="/"><a><img src="http://localhost:8000/static/img/logo.svg" /></a></Link>
        <h2 className="strapline">Stuff made by <Link href="/about/"><a>Damian Moore</a></Link></h2>
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
        margin: 92px 0 0 30px;
        font-size: 18px;
        font-style: italic;
        vertical-align: top;
      }
      #header a {
        color: rgba(255,255,255,0.33);
      }
    `}</style>
  </>
)

export default Header
