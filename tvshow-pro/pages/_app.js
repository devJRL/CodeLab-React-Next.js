import Header from '../components/Header'

const MyApp = ({ Component, pageProps }) => {
  return (
    <>{/* React Flagment */}
      <Header />
      <Component {...pageProps} />

      <style jsx>
        {`
          :global(ul) {
            padding: 0;
            margin: 0;
            list-style-type: none;
          }
        `}
      </style>
    </>
  )
}

export default MyApp
