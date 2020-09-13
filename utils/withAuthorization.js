import cookies from "nookies";
import Router from "next/router";
import { Component } from "react";

// Extract token from Cookie
const signinUrl = "/signin";
const authenticate = (context) => {
  const { token } = cookies.get(context);

  // Remove previous planned context (from cookie)
  cookies.destroy(null, "plannedRoute");
  // Save current planned context (in cookie)
  cookies.set(
    context,
    "plannedRoute",
    JSON.stringify({
      href: context.pathname,
      as: context.asPath,
    }),
    { path: "/" }
  );

  if (context.req && !token) {
    // Redirect to Signin Page (in Client)
    context.res.writeHead(302, { Location: `${signinUrl}` });
    context.res.end();
    return;
  }

  if (!token) {
    // Route to Sigin Page (in Server)
    Router.push(`${signinUrl}`);
  }

  return token;
};

const isAuthenticated = (context) => {
  const { token } = cookies.get(context);
  return token;
};

// Check AUTH
const withAuthorization = (WrapperedComponent) => {
  // Override Component with React
  return class extends Component {
    static async getInitialProps(context) {
      // Extract token from Cookie
      const token = authenticate(context);
      // Dynamic Context Fetching
      const componentProps =
        WrapperedComponent.getInitialProps &&
        (await WrapperedComponent.getInitialProps(context));
      // Return with override components
      return { token, ...componentProps };
    }
    render() {
      return <WrapperedComponent {...this.props} />;
    }
  };
};

export { withAuthorization, isAuthenticated };
