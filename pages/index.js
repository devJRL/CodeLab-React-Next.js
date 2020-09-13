import Router from "next/router";
import cookies from "nookies";

const Home = () => null;

// Redirect on server side
Home.getInitialProps = (context) => {
  const { defaultCountry } = cookies.get(context);
  const country = context.query.country || defaultCountry || "us";

  if (process.browser) {
    Router.replace("/[country]", `/${country}`);
  } else {
    context.res.writeHead(302, { Location: `/${country}` });
    context.res.end();
  }

  return {};
  // Return empty json
  // To Prevent Error: "Home.getInitialProps()" should resolve to an object. But found "undefined" instead.
};

export default Home;
