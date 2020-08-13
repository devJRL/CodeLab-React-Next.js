import ThumbnailWtihSass from '../../components/ThumbnailWithSass'

// [SAMPLE] Fetching Data on Server side (Next.js)
const CountryHome = ({ shows, country }) => {
  const renderShows = () => {
    return shows.map(({ show }, index) => {
      return (
        <li key={index}>
          {/* Search: World's Most Extreme (40594) : Not served Image's url (null)*/}
          <ThumbnailWtihSass
            imageUrl={(show.image && show.image.medium) || undefined}
            showName={show.name}
            href="/[country]/[showId]"
            as={`/${country}/${show.id}`}
          />
        </li>
      )
    })
  }
  return (
    <div>
      <ul className="tvshows-grid">
        {renderShows()}
      </ul>

      <style jsx>{`
        .tvshows-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
      `}</style>
    </div>
  )
}

// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
CountryHome.getInitialProps = async context => {
  // Dynamic Context Fetching
  const country = context.query.country || 'us'
  const res = await fetch(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  )
  const json = await res.json();
  return { shows: json, country }
}

// http://localhost:3000/[us]
export default CountryHome;
