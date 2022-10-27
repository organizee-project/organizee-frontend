import { ReactElement } from "react";
import Head from "next/head";

import { Home } from "layouts/home";
import { LayoutHeader } from "components/layouts";
import { GlobalStyles } from "styles/global";

const Page = () => {
  return (
    <>
      <GlobalStyles />
      <div>
        <Head>
          <title>Organizze - compartilhe seus estudos</title>
          <meta
            name="description"
            content="Organize e compartilhe seus estudos"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Home />
      </div>
    </>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Page;
