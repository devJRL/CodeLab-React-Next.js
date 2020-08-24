import axios from "axios";
import parse from "html-react-parser"; // yarn add html-react-parser

import Cast from "../../components/Cast";
// import Error from "next/error";
import CustomError from "../_error";

const ShowDetail = ({ show = {}, statusCode }) => {
  // Error Handling
  if (statusCode) {
    // Custom Error with `pages/_error.js`
    return <CustomError statusCode={statusCode} />;
    // Default Error with `next/error`
    // return <Error statusCode={statusCode} />;
  }

  const { image, name, summary, _embedded } = show;

  return (
    <div className="show-details">
      <div
        className="show-details__poster"
        style={{
          backgroundImage: `url(${image.original})`,
        }}
      ></div>

      <h1>{name}</h1>
      {parse(summary)}

      {/* Cast Component Dynamic Handling */}
      {_embedded.cast.length > 0 && <Cast cast={_embedded.cast} />}

      <style jsx>{`
        .show-details__poster {
          height: 200px;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

// http://localhost:3000/[us]/[123]
export default ShowDetail;

ShowDetail.getInitialProps = async ({ query }) => {
  try {
    const { showId } = query; // `query` like.. { country: 'us', showId: '5617' }
    const res = await axios.get(
      `https://api.tvmaze.com/shows/${showId}?embed=cast`
    );
    // Offer props to Component
    return {
      show: res.data,
    };
  } catch (error) {
    // Check status code for error handling
    console.error("ShowDetail.getInitialProps -> error", error);
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};
