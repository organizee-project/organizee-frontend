import Head from "next/head";

import HomeTemplate from "layouts/home";
import { ReactElement } from "react";
import { LayoutHeader } from "components/layouts";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Organizze - compartilhe seus estudos</title>
        <meta
          name="description"
          content="Organize e compartilhe seus estudos"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeTemplate />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <LayoutHeader>{page}</LayoutHeader>;
};

export default Home;
