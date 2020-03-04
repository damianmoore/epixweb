import DocumentLayout from '../components/DocumentLayout'

export default function About() {
  return (
    <DocumentLayout title="About" description="Links to my social media accounts, key skills and work history, interests and education.">
      <h1>About</h1>
      <p>
        Hi, I'm Damian Moore and I hope you've found some interesting ideas on
        my site. I started this as a personal homepage in 2002, made it into a
        blog in 2008 and now also use it place to document some of the personal
        projects I've worked on.
      </p>
      <div className="social">
        <a href="https://github.com/damianmoore">
          <img src="/static/img/github.svg" alt="GitHub" title="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/damian-moore-48272923/">
          <img src="/static/img/linkedin.svg" alt="LinkedIn" title="LinkedIn" />
        </a>
        <a href="https://stackoverflow.com/users/1417989/damian-moore">
          <img
            src="/static/img/stackoverflow.svg"
            alt="Stack Overflow"
            title="Stack Overflow"
          />
        </a>
        <a href="https://www.flickr.com/people/damianmoore/">
          <img src="/static/img/flickr.svg" alt="Flickr" title="Flickr" />
        </a>
        <a href="https://twitter.com/damianmoore">
          <img src="/static/img/twitter.svg" alt="Twitter" title="Twitter" />
        </a>
      </div>

      <div className="cv">
        <h2>Key Skills</h2>
        <ul>
          <li>
            <p>
              <strong>Back-end</strong> — Python, Django, Flask, Node JS, REST
              and GraphQL APIs, Performance optimisation, Caching, Memcached,
              Redis, Gevent, Celery, RabbitMQ, MySQL, PostgreSQL, App Engine.
            </p>
          </li>
          <li>
            <p>
              <strong>Front-end</strong> — HTML, CSS, JavaScript, React,
              Next.js, Redux, Webpack, PWAs, Graphics.
            </p>
          </li>
          <li>
            <p>
              <strong>Data engineering / Data science</strong>— Tensorflow,
              Keras, Spark ML, MMLSpark, SKLearn, Pandas, Matplotlib.
            </p>
          </li>
          <li>
            <p>
              <strong>Devops</strong> — Linux admin, Cloud services (AWS +
              Google Cloud), CI/CD, Docker, Kubernetes, Reproducible
              configuration of web, proxy, email servers etc.
            </p>
          </li>
          <li>
            <p>
              <strong>Testing</strong> — Unit tests, Integration Tests, TDD,
              BDD, Selenium, Cypress, Jenkins, Travis.
            </p>
          </li>
        </ul>
        <h2>Employment</h2>
        <h3>
          Tandem Bank — Principal Data Engineer (Permanent) — Feb 2018 to Dec
          2019
        </h3>
        <p>
          Tandem is a challenger bank that aims to do as much as possible to
          help their customers by getting to know them better. By analysing
          spending and other behaviours they are able to help with bills,
          cash-flow, product selection and more.
        </p>
        <p>
          I was hired as their first Python engineer, at a time when they were
          just starting to build a Data Science team. I worked closely with the
          Data Scientists to get their models running in an automated fashion,
          using the scalable compute and storage resources of AWS. Some of the
          projects I deployed were predicting customer spending money and
          safe-to-save amounts, detecting fraudulent credit card applications
          and identifying where to direct marketing spend. The main technologies
          involved Spark/Jupyter/Livy on EMR, Tensorflow/Keras on
          Docker/EC2/Fargate, Atlas with S3 as metadata store and data lake,
          Kinesis as an event stream and AWS Lambda for lightweight processing.
        </p>
        <p>
          As well writing code I distributed work with colleagues at an
          outsourcing firm based in Poland whilst also trying to grow the
          in-house data engineering team.
        </p>
        <h3>
          Hoop — Full-stack developer (Contract, then permanent) — Feb 2015 to
          Jan 2018
        </h3>
        <p>
          Hoop helps families find great things to do with their kids. They have
          over 1M users in the UK using the Android and iOS apps to discover and
          book events, classes and workshops nearby. Results can be filtered and
          suggested according to algorithmic signals. Content comes from both a
          remote team of curators and third-party organisers who manage their
          own listings.
        </p>
        <p>
          I was hired during the formation of the tech team, along with another
          developer, due to my experience with Python, building scalable
          architectures and user interfaces. We set about building a library to
          connect several microservices together via RabbitMQ. Several parts
          were adopted from Django such as the ORM, authentication and
          templating. The next stage was building the custom CMS for quick and
          accurate data entry. I built a stack using React, Redux, SASS, Webpack
          and Django fed from database-backed task queues.
        </p>
        <p>
          I am proud of the well-optimised CI/CD pipeline we built based on
          Docker and Kubernetes.
        </p>
        <h3>FusePump — Back-end developer (Contract) — Dec 2014</h3>
        <p>
          FusePump run a variety of managed services based around e-commerce and
          web scraping. Historically their back-end codebase was all PHP-based
          but they had started experimenting with Python and Django for a couple
          of new projects. During this short contract I advised developers on
          best practices, set up automated test infrastructure and extended
          admin interfaces.
        </p>
        <h3>
          Ostmodern — Back-end developer (Contract) — Aug 2014 to Nov 2014
        </h3>
        <p>
          Ostmodern are digital product designers, video-on-demand specialists
          and content delivery experts. They work closely with leading media,
          broadcast and sports brands. I worked as the sole back-end developer
          on two projects whilst there.
        </p>
        <p>
          The first was a website re-build for an organisation that tracks
          statistics of football managers and their clubs. The project was based
          on Django/Wagtail and involved writing a lot of scripts to import
          stats, copy and images.
        </p>
        <p>
          The second project was to develop a web-based pain management exercise
          programme for a health care company. Patients used the system daily,
          entered progress and the programme adapted for subsequent days.
        </p>
        <h3>
          Pancentric Digital — Full-stack developer (Contract) — Feb 2014 to Jul
          2014
        </h3>
        <p>
          Pancentric Digital is a lively digital agency with a wide variety of
          client projects to build. One of the larger projects was a group of
          sites for a leading bus company group. It involved real-time external
          APIs and alerting users about delays to their chosen routes. It was
          developed in Django and ran tens of different regional sites.
        </p>
        <p>
          I also developed a re-usable Django application called
          <i>Moderated Social</i> which was used for at least three social
          branding campaigns. It ran photo competitions where the public could
          participate by posting to Instagram, Twitter or Facebook using a
          particular hashtag. Photos got imported, displayed, then voted on with
          a leader board.
        </p>
        <h3>
          onefinestay — Full-stack, then front-end developer (Permanent) — Jan
          2012 to Jan 2014
        </h3>
        <p>
          onefinestay is a luxury holiday accommodation agent renting out homes
          in popular cities across the world. The company needed internal tools
          to handle cleaning, meeting guests, marketing promotion and guiding
          guests around their city. Other areas I specialised in were payment
          processing, custom CMS’, work-flow tools for operations, single-page
          backbone apps and APIs for native mobile apps.
        </p>
        <p>
          I saw large changes at onefinestay and the tech team nearly quadrupled
          in size to about 30 people during my time there. As the team grew we
          separated into platform and front-end teams to make things more
          manageable. In order to help develop other’s knowledge I often gave
          presentations and assisted with introductory coding tutorial sessions
          for the whole company.
        </p>
        <h3>
          ReportLab — Full-stack developer (Permanent) — Sep 2008 to Jan 2012
        </h3>
        <p>
          ReportLab is a company that builds tailored web applications for the
          travel, financial and printing industries. A fundamental part of
          almost all the systems I built was automated PDF creation. The PDF
          library used for this was created in-house (also called ReportLab) and
          is the most popular free/open-source library in the Python world. A
          big appeal for me was being able to improve, manage and support these
          open-source releases.
        </p>
        <h2>Interests</h2>
        <p>
          Programming, web development, open source software, collaboration,
          design, photography, electronics, network security, the environment,
          3D printing, CNC machining, snowboarding, playing saxophone.
        </p>
        <h2>Education</h2>
        <p>Essex University (2005–2008) — B.Sc. (Hons.) Computer Science</p>
        <p>
          Norton Knatchbull School (1998–2005) — A-levels: ICT, Business
          Studies, Product Design.
        </p>
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
