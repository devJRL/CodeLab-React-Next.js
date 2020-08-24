import axios from "axios";

import CustomError from "../_error";
import ThumbnailWtihSass from "../../components/ThumbnailWithSass";

// [SAMPLE] Fetching Data on Server side (Next.js)
const CountryHome = ({ shows, country, statusCode }) => {
  // Error Handling
  if (statusCode) {
    // Custom Error with `pages/_error.js`
    return <CustomError statusCode={statusCode} />;
  }
  const renderShows = () => {
    return shows.map(({ show }, index) => (
      <li key={index}>
        <ThumbnailWtihSass
          imageUrl={(show.image && show.image.medium) || undefined}
          showName={show.name}
          href="/[country]/[showId]"
          as={`/${country}/${show.id}`}
        />
      </li>
    ));
  };
  return (
    <div>
      <ul className="tvshows-grid">{renderShows()}</ul>

      <style jsx>{`
        .tvshows-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

// https://nextjs.org/docs/api-reference/data-fetching/getInitialProps
CountryHome.getInitialProps = async (context) => {
  try {
    // Dynamic Context Fetching
    const country = context.query.country || "us"; // undefined > Function, number, string, boolean > Object
    const res = await axios.get(
      `https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );
    const json = res.data;

    // Offer props to Component
    return {
      shows: json,
      country,
    };
  } catch (error) {
    // Check status code for error handling
    console.error("CountryHome.getInitialProps -> error", error);
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

// http://localhost:3000/[us]
export default CountryHome;
