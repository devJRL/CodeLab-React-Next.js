import parse from "html-react-parser"; // yarn add html-react-parser
import axios from "axios";

import Cast from "../../components/Cast";
// import Error from "next/error";
import CustomError from "../_error";
import { withAuthorization } from "../../utils/withAuthorization";

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
          backgroundImage: `url(${
            image && image.original
              ? image.original
              : "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg"
          })`,
        }}
      ></div>

      <h1>{name || "Invalid Name"}</h1>
      {parse(summary || "No data! API doesn't serve data about this show.")}

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

// http://localhost:3000/[us]/[123]
// export default ShowDetail;
export default withAuthorization(ShowDetail);
