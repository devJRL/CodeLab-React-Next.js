import Link from 'next/link'

const About = () => {
  return (
    <div>
      <h2>This is our About page.</h2>
      <p>
        <Link href="/">
          <a>Go home('/') 'Link' component.</a>
        </Link>
      </p>
    </div>
  )
}

// localhost:3000/exp/about
export default About