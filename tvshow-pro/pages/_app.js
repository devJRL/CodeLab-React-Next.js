import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>{/* React Flagment */}
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
