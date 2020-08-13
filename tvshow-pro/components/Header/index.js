const countries = [
  { label: 'us', name: 'United States' },
  { label: 'bz', name: 'Brazil' },
]

const Header = () => {
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
      <select onChange={selectorChange}>
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