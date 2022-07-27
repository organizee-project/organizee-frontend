import { Header } from "components/header";
import { Banner } from "./homeBanner";
import { Posts } from "./homePosts";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Posts />
    </>
  );
};

export default Home;
