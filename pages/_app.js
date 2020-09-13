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

          :global(form) {
            display: flex;
            width: 100%;
            flex-direction: column;
            text-align: center;
          }

          :global(input) {
            margin-bottom: 10px;
            padding: 10px;
            width: 100%;
            box-sizing: border-box;
          }

          :globla(button) {
            padding: 10px;
            margin-bottom: 10px;
            cursor: pointer;
            color: #fff;
            background-color: #f4b741;
            border-color: transparent;
            border-radius: 4px;
          }

          :global(.error) {
            color: red;
            padding-bottom: 10px;
          }
        `}
      </style>
    </>
  );
};

export default MyApp;
