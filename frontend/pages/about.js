import DocumentLayout from '../components/DocumentLayout'


export default function About() {
  return (
    <DocumentLayout title="About">
      <h1>About</h1>
      <p>Hi, I'm Damian Moore and I hope you've found some interesting ideas on my site. I started this as a personal homepage in 2002, made it into a blog in 2008 and now also use it place to document some of the personal projects I've worked on.</p>
      <div className="social">
        <a href="https://github.com/damianmoore"><img src="/static/img/github.svg" alt="GitHub" title="GitHub" /></a>
        <a href="https://www.linkedin.com/in/damian-moore-48272923/"><img src="/static/img/linkedin.svg" alt="LinkedIn" title="LinkedIn" /></a>
        <a href="https://stackoverflow.com/users/1417989/damian-moore"><img src="/static/img/stackoverflow.svg" alt="Stack Overflow" title="Stack Overflow" /></a>
        <a href="https://www.flickr.com/people/damianmoore/"><img src="/static/img/flickr.svg" alt="Flickr" title="Flickr" /></a>
        <a href="https://twitter.com/damianmoore"><img src="/static/img/twitter.svg" alt="Twitter" title="Twitter" /></a>
      </div>
      <style jsx>{`
        .social {
          text-align: center;
        }
        .social img {
          width: 96px;
          opacity: 0.8;
        }
      `}</style>
    </DocumentLayout>
  )
}
