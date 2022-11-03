import { UserContextProvider } from "contexts/user";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "styles/global";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />
      <UserContextProvider>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </UserContextProvider>
    </>
  );
}

export default MyApp;
