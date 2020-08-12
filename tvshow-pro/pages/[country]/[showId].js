import axios from 'axios'
import parse from 'html-react-parser' // yarn add html-react-parser

import Cast from '../../components/Cast'

const ShowDetail = ({ show }) => {
  const { image, name, summary, _embedded } = show;

  return (
    <div className="show-details">
      <div
        className="show-details__poster"
        style={{ backgroundImage: `url(${image.original})` }}
      ></div>

      <h1>{name}</h1>
      {parse(summary)}

      <Cast cast={_embedded.cast} />

      <style jsx>{`
        .show-details__poster {
          height: 200px;
          background-size: cover;    
        }
      `}</style>
    </div>
  )
}

// http://localhost:3000/[us]/[123]
export default ShowDetail;

ShowDetail.getInitialProps = async () => {
  const res = await axios.get(`http://api.tvmaze.com/shows/1?embed=cast`)
  return { show: res.data }
}
