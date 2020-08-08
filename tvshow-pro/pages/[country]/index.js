import Thumbnail from '../../components/Thumbnail'

// [SAMPLE] Fetching Data on Server side (Next.js)
const CountryHome = ({ shows }) => {
  const renderShows = () => {
    return shows.map(({ show }, index) => {
      return (
        <li key={index}>
          <Thumbnail
            imageUrl={show.image.medium}
            showName={show.name}
            showId={show.id}
          />
        </li>
      )
    })
  }
  return <ul className="tvshows">{renderShows()}</ul>
}

// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
CountryHome.getInitialProps = async context => {
  // Dynamic Context Fetching
  const country = context.query.country || 'us'
  const res = await fetch(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  )
  const json = await res.json();
  return { shows: json }
}

// http://localhost:3000/[us]
export default CountryHome;
