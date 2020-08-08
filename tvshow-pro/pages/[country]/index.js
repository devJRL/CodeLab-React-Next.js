const CountryHome = (props) => {
  // Fetching Data on Server side [Next]
  console.log("CountryHome -> props.shows:", props.shows)

  return (
    <h1>This is Country Test page.</h1>
  )
}

// Fetching Data on Server side [Next]
// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
CountryHome.getInitialProps = async () => {
  const res = await fetch('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
  const json = await res.json();
  return { shows: json }
}

// http://localhost:3000/[us]
export default CountryHome;
