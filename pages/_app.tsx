import { AuthContextProvider } from "contexts/auth";
import { ProfileContextProvider } from "contexts/profile";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyles } from "styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyles />
      <ProfileContextProvider>
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
          </QueryClientProvider>
        </AuthContextProvider>
      </ProfileContextProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default MyApp;
