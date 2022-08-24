import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
