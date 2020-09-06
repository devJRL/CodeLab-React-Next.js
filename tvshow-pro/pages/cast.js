import axios from "axios";

import CustomError from "./_error";

const CastMemberDetail = ({ person, statusCode }) => {
  if (statusCode) {
    // Custom Error with `pages/_error.js`
    return <CustomError statusCode={statusCode} />;
  }

  return (
    <div className="castPerson">
      <img
        className="castPerson__img"
        src={
          person.image.medium ||
          "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg"
        }
      />
      <h1>
        {person.name} ({person.gender})
      </h1>
      <h2>
        {person.country.name} | {person.birthday}
      </h2>
      <a target="_blank" href={person.url}>
        Click to get detail information
      </a>

      <style jsx>{`
        .castPerson {
          margin: 0 25%;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

CastMemberDetail.getInitialProps = async (
  { query } // in context
) => {
  try {
    const response = await axios.get(
      `https://api.tvmaze.com/people/${query.personId}` // [ /cast/:personId ] when routed by express.js
    );

    return {
      person: response.data,
    };
  } catch (error) {
    console.error("CastMemberDetail.getInitialProps -> error", error);
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default CastMemberDetail;
