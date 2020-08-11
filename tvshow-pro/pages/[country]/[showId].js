import axios from 'axios'

const ShowDetail = ({ show }) => {
  const { name, image } = show

  return (
    <div className="show-details">
      <hi>{name}</hi>
      <div
        className="show-details__poster"
        style={{ backgroundImage: `url(${image.original})` }}
      ></div>

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