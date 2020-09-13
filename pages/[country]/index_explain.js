const CountryHome = ({ shows }) => {

  console.log("Process in Client side - { shows }: " + { shows })

  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem
      return (
        <li key={index}>[{show.id}] {show.name}</li>
      )
    })
  }

  return (
    <ul className="tvshows">{renderShows()}</ul>
  )
}

// Fetching Data on Server side [Next] - https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
CountryHome.getInitialProps = async context => {
  // Dynamic Context Fetching
  const country = context.query.country || 'us'

  // [ISO-3166-1 :: Country code] https://en.wikipedia.org/wiki/ISO_3166-1
  console.log("Process in Server side - Dynamic Context catching [country:", country, "]")

  const res = await fetch(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  )
  const json = await res.json();
  return { shows: json }
}

// http://localhost:3000/[us]
export default CountryHome;
