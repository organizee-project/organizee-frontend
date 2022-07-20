import Head from "next/head";

import HomeTemplate from "templates/home";

export default function Home() {
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
}
