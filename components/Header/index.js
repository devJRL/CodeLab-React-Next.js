import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cookies from "nookies";

import { isAuthenticated } from "../../utils/withAuthorization";

const countries = [
  { label: "us", name: "United States" },
  { label: "br", name: "Brazil" },
];

// router: ServerRouter {
//   route: '/[country]',
//   pathname: '/[country]',
//   query: { country: 'us' },
//   asPath: '/us',
//   basePath: '',
//   events: undefined,
//   isFallback: false
// }
const Header = () => {
  // Catch [country] in qeury from Next-Router
  const router = useRouter();

  // Match basic selected option along with 'query' using React-State
  const [selectedCountry, setSelectedCountry] = useState(
    router.query.country || "us"
  );

  // CallBack Function for <select> tag
  const selectorChange = (event) => {
    // set 'value in event' state
    setSelectedCountry(event.target.value || "us"); // "us" for default country
    // redirect to '/[country]'
    router.push(
      `/[country]`, // url: page template
      `/${event.target.value}` // as: mask
    );
  };

  const handleSignOut = () => {
    cookies.destroy(null, "token");
  };

  useEffect(() => {
    cookies.set(null, "defaultCountry", selectedCountry, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });
  }, [selectedCountry]);

  // Generate with map() of Array
  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <option key={country.label} value={country.label}>
          {country.name}
        </option>
      );
    });
  };

  return (
    <div className="header">
      <Link href={`/${selectedCountry}`}>
        <a className="msg">Go Home('/{selectedCountry}')</a>
      </Link>

      <select value={selectedCountry} onChange={selectorChange}>
        {renderCountries()}
      </select>

      {!isAuthenticated() && (
        <Link href="/signin">
          <a className="signin">Sign In</a>
        </Link>
      )}

      {isAuthenticated() && (
        <Link href="/[country]" as={`/${selectedCountry}`}>
          <a className="signout" onClick={handleSignOut}>
            Sign Out
          </a>
        </Link>
      )}

      <style jsx>{`
        .header {
          padding: 20px;
          margin-bottom: 10px;
          background-color: #333;
          color: #fff;
          text-align: center;
          display: flex;
          justify-content: space-between;
        }
        .header > .msg {
          color: #fff;
        }
        .header > .signin {
          font-weight: bold;
          color: yellow;
        }
        .header > .signout {
          font-weight: bold;
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Header;
