import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2>This is my Home Page.</h2>
      <p>
        <Link href="/exp/about">
          <a>About('/exp/about') with 'Link' component.</a>
        </Link>
      </p>
    </div>
  )
}
