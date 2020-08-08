import axios from 'axios' // > [AXIOS] `yarn add axios`
// import { useEffect } from 'react'

const CountryHome = (props) => {
  // Fetching Data on Server side [Next]
  console.log("CountryHome -> props.shows:", props.shows)

  // Fetching Data on Client side [Axios]
  // useEffect(() => {
  //   axios
  //     .get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
  //     .then(response => console.log(response.data))
  // }, [])

  return (
    <h1>This is Country Test page.</h1>
  )
}

// Fetching Data on Server side [Next]
// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
CountryHome.getInitialProps = async () => {
  const response = await axios.get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
  // console.log(response.data)
  return { shows: await response.data }
}

// http://localhost:3000/[us]
export default CountryHome;
