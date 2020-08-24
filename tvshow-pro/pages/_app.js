import Header from "../components/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      {/* React Flagment */}
      <Header />
      <Component {...pageProps} />

      <style jsx>
        {`
          @font-face {
            font-family: "Noto Sans KR";
            src: url("/fonts/noto-sans/NotoSansKR-Medium.otf") format("otf");
          }

          :global(html) {
            font-family: "Noto Sans KR", sans-serif;
          }

          :global(ul) {
            padding: 0;
            margin: 0;
            list-style-type: none;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
