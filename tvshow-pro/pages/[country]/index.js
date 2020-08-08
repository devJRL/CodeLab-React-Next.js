import { useEffect } from 'react'
import axios from 'axios' // > [AXIOS] `yarn add axios`

const CountryHome = () => {
  useEffect(() => {
    // Fetching Data on Client side [Axios]
    axios
      .get('http://api.tvmaze.com/schedule?country=US&date=2014-12-01')
      .then(response => console.log(response.data))
  }, [])

  return (
    <h1>This is Country Test page.</h1>
  )
}

// http://localhost:3000/[us]
export default CountryHome;
