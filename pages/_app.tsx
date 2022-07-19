import { GlobalStyles } from "styled/global";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
