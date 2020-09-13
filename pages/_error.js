import Error from "next/error";

const CustomError = ({ statusCode }) => {
  switch (statusCode) {
    case 404:
      return (
        <Error statusCode={statusCode} title="The resource was not found..." />
      );
    case 500:
    default:
      return (
        <Error statusCode={statusCode} title="Oops! Something went wrong!" />
      );
  }
};

CustomError.getInitialProps = ({ err, res }) => {
  return {
    statusCode: res ? res.statusCode : err ? err.statusCode : 404,
  };
};

export default CustomError;
