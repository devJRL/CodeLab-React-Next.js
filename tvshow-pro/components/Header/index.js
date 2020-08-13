const Header = () => {
  // CallBack Function for <select> tag
  const selectorChange = e => {
    // console.log('selected country: ', e.target.value)
  }

  return (
    <div className="header">
      <select onChange={selectorChange}>
        <option value="us">United States</option>
        <option value="bz">Brazil</option>
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