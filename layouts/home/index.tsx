import { Header } from "components/header";
import { Banner } from "./homeBanner";
import { HomeContent } from "./homeContent";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <HomeContent />
    </>
  );
};

export default Home;
