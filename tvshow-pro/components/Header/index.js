import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

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
  const [selectedCountry, setSelectedCountry] = useState(router.query.country);

  // CallBack Function for <select> tag
  const selectorChange = (event) => {
    // set 'value in event' state
    setSelectedCountry(event.target.value);
    // redirect to '/[country]'
    router.push(
      `/[country]`, // url: page template
      `/${event.target.value}` // as: mask
    );
  };

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
        <a className="msg">
          Go Home('/{selectedCountry}') with 'Link' component.
        </a>
      </Link>
      <select value={selectedCountry} onChange={selectorChange}>
        {renderCountries()}
      </select>

      <style jsx>{`
        .header {
          padding: 20px;
          margin-bottom: 10px;
          background-color: #333;
          color: #fff;
          text-align: center;
        }
        .msg {
          color: #fff;
          margin-right: 200px;
        }
      `}</style>
    </div>
  );
};

export default Header;
