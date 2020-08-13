import { useRouter } from 'next/router';

const countries = [
  { label: 'us', name: 'United States' },
  { label: 'bz', name: 'Brazil' },
]

const Header = () => {
  // Catch [country] in qeury from Next-Router
  const router = useRouter()
  // router: ServerRouter {
  //   route: '/[country]',
  //   pathname: '/[country]',
  //   query: { country: 'us' },
  //   asPath: '/us',
  //   basePath: '',
  //   events: undefined,
  //   isFallback: false
  // }

  // Match basic selected option along with 'query'
  const countryPath = router.query.country

  // CallBack Function for <select> tag
  const selectorChange = e => {
    // console.log('selected country: ', e.target.value)
  }

  // Generate with map() of Array
  const renderCountries = () => {
    return countries.map(country => {
      return <option key={country.label} value={country.label}>{country.name}</option>
    })
  }

  return (
    <div className="header">
      <select
        value={countryPath}
        onChange={selectorChange}>
        {renderCountries()}
      </select>

      <style jsx>{`
        .header {
          padding: 20px;
          background-color: #333;
          color: #fff;
          text-align: center;
        }
      `}</style>
    </div>
  )
}

export default Header;