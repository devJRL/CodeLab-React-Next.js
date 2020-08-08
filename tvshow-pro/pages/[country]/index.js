const CountryHome = ({ shows }) => {

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
CountryHome.getInitialProps = async () => {
  const res = await fetch('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
  const json = await res.json();
  return { shows: json }
}

// http://localhost:3000/[us]
export default CountryHome;
