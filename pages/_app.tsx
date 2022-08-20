import { GlobalStyles } from "styles/global";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  console.log(getLayout);

  return (
    <>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default MyApp;
