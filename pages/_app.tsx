import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
